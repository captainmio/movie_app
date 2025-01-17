import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import User from "../models/User.model";

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
      message: 'API successfully executed v1',
      data: []
    });
    return;
  } else {
    res.status(400).json({ success: false, message: "Invalid Data" });
    return;
  }
}

export {
  registerUser as register,
};