
import UserModal from '../model/user.modal.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
import generateJwtToken from '../helpers.js';
import otpGenerator from 'otp-generator';

/** POST: http://localhost:3000/v1/register
 * @param : [
 * "username": "example123",
 * "password": "admin123",
 * "email": "example@gmail.com",
 * "first_name": "bill",
 * "last_name":"jobs",
 * "mobile": 1234567890,
 * "address": "Apt. 556, Kulas Light, Gwenborough",
 * "profile": "",
 * ]
*/
export async function register(req, res) {

  try {
    const { username, password, profile, email } = req.body;

    // Check if username already exists
    const existingUser = await UserModal.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ error: "Username already exists" });
    }

    // Check if email already exists
    const existingEmail = await UserModal.findOne({ email });
    if (existingEmail) {
      return res.status(400).send({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new UserModal({
      username,
      password: hashedPassword,
      profile: profile || '',
      email,
    });

    // Save user to database
    await user.save();

    return res.status(201).send({ msg: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

/**POST: http://localhost:3000/v1/login
 * @param {
 * username: 'steve',
 * password: 'jobsApp@1'
 * }
 */
export async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await UserModal.findOne({ username });
    if (!user) {
      return res.status(404).send({ error: "Username not found" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
      return res.status(400).send({ error: "Invalid password" });
    }

    const token = generateJwtToken({
      userId: user._id,
      username: user.username
    });

    return res.status(200).send({
      msg: "Login successful",
      username: user.username,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

/**GET: http://localhost:3000/v1/user/steve
 * 
 */
export async function getUser(req, res) {
  const { username } = req.params;

  try {
    if (!username) {
      return res.status(400).send({ error: "Invalid username" });
    }

    const user = await UserModal.findOne({ username });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    //removeing the password and unnecessary data from the object and sending the response
    const { password, ...rest } = Object.assign({}, user.toJSON());
    return res.status(200).send(rest);

  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

/**PUT: http://localhost:3000/v1/update-user
 * @param: {
 * "id": "<userid>"
 * }
 * body: {
 * firstName: '',
 * address: '',
 * profile: ''
 * }
 */
export async function updateUser(req, res) {
  try {
    const { userId } = req.user;

    if (userId) {
      const body = req.body;

      await UserModal.updateOne({ _id: userId }, body);
      return res.status(201).send({ msg: "Record updated...!✌️" });
    } else {
      return res.status(401).send({ error: "User not authenticated" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

/**GET: http://localhost:3000/v1/generate-otp */
export async function generateOTP(req, res) {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  res.status(201).send({ code: req.app.locals.OTP });
}

/**GET: http://localhost:3000/v1/verify-otp */
export async function verifyOTP(req, res) {
  const {code} = req.query;
  if(parseInt(req.app.locals.OTP) === parseInt(code)){
    req.app.locals.OTP = null; // reset the opt value
    req.app.locals.resetSession = true; // start session for the reset password
    return res.status(201).send({msg:'OTP Verification is successfull 🙌' });
  }

  return res.status(400).send({error: 'Invalid OTP'});
}

/**GET: http://localhost:3000/v1/create-reset-session 
 * successfully redirect the user when OTP is valid
*/
export async function createResetSession(req, res) {
  if(req.app.locals.resetSession){
    req.app.locals.resetSession = false; //allow access to this route only once
    return res.status(201).send({msg:"access granted"})
  }
  return res.status(440).send({error: "Session expired"});
}

/**PUT: http://localhost:3000/v1/reset-password
 * update the password when we have valid session
 */
export async function resetPassword(req, res) {
  res.json('reset-passwrod route')
}