import Mailgen from 'mailgen';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

//https://ethereal.email/create
let nodeConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL, // generated ethereal user
    pass: process.env.MAIL_PASSWORD, // generated ethereal password
  }
}

let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/"
  }
})

/**POST: http://localhost:8080/api/register-mail
 * @param: {
 * "username":"abhilash"
 * "userMail":"abhilash@mail.com"
 * "text":"",
 * "subject":""
 * }
 */

export const registerMail = async (req, res) => {
  const { username, userMail, text, subject } = req.body;

  //body of the email
  var email = {
    body: {
      name: username,
      intro: text || "Welcome to the project, I am very excited to have you on board.",
      outro: "Need help, or have questions? Just replay to this email, I will try to help."
    }
  }

  var emailBody = MailGenerator.generate(email);
  let message = {
    from: process.env.MAIL,
    to: userMail,
    subject: subject || "Signup successful",
    html: emailBody
  }

  //send mail
  transporter.sendMail(message)
    .then(() => {
      return res.status(200).send({ msg: "You should receive an mail from us." })
    })
    .catch((error) =>
      res.status(500).send({ error }));
}
