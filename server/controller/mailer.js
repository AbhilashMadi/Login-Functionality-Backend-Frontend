import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env.JWT_SECRET);

//https://ethereal.email/create
let nodeConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL, // generated ethereal user
    pass: process.env.MAIL_PASSWORD, // generated ethereal password
  },
}

let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  }
})

export const registerMail = async (req, res) => {
  const { username, userMail, text, subject } = req.body;

  //body of the email
  var email = {
    body: {
      name: username,
      intro: text || "Welcome to The Project I am very excited to have you on board.",
      outro: "Need help, or have questions? Just replay to this email, we'\d love to help."
    }
  }

  var emailBody = MailGenerator.generate(email);
  let message = {
    from: process.env.EMAIL,
    to: userMail,
    subject: subject || "Signup successfull",
    html: emailBody,
  }

  //send mail
  transporter.sendMail(message)
    .then(() =>
      res.status(200).send({ msg: "You should receive an email form us." }))
    .catch((error) => res.status(500).send({ error: "Internal server error" }));
}