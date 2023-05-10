import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export default function generateJwtToken(payload){
  const options = {
    expiresIn: '24h'
  };
  return jwt.sign(payload,JWT_SECRET,options);
}