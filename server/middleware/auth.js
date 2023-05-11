import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

async function authenticate(req, res, next) {
  try {
    // access authorize header to validate request
    const token = req.headers.authorization.split(" ")[1];
    // retrieve the user details of the logged-in user
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send({ error: "Authentication failed" });
  }
}

export default authenticate;

export function localVariables(req,res,next){
  req.app.locals = {
    OTP :null,
    resetSession: false,
  }
  next();
}