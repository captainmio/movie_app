import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import User from "../models/User.model";
import jwt from "jsonwebtoken";

const registerUser = async (req: Request, res: Response) => {

  const {firstName, lastName, email, password } = req.body;

  // check if email already exist
  const emailExist = await User.find({email});

  if(emailExist.length) {
    res.status(400).json({ success: false, message: "User already exists" });
    return;
  }

  const hashPassword = await bcrypt.hash(password, 12)

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });


  if (user) {
    res.json({
      success: true,
      message: 'API successfully executed',
      data: []
    });
    return;
  } else {
    res.status(400).json({ success: false, message: "Invalid Data" });
    return;
  }
}

const login = async (req: Request, res: Response) => {
  const {email, password} = req.body;

  const user = await User.findOne({email});

  if(user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ success: false, message: 'Authentication failed' });
      return;
    }
    
    const token = jwt.sign({ userId: user._id }, `${process.env.JWT_SECRET_KEY}`, {
      expiresIn: '1h',
    });

    res.status(200).json({ success: true, message: 'Login successful', data: token });

  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
    return;
  }
}

export {
  registerUser as register,
  login as login,
};