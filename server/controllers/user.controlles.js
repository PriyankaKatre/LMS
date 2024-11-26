import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utiles/generateToken.js";

export const register = async (req, res) => {
  console.log("req.body", req.body);
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required.",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (e) {
    console.log("failed Register", e);
    res.status(400).json({
      success: false,
      message: "Failed to register",
    });
  }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        res.status(400).json({
          success: false,
          message: "All Fields are required.",
        });
      }
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({
          success: false,
          message: "Incorrect email or password",
        });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        res.status(400).json({
          success: false,
          message: "Incorrect email or password",
        });
      }
      generateToken(res, user, `welcome back ${user.name}`);
    } catch (e) {
      res.status(400).json({
        success: false,
        message: "Failed to Login",
      });
    }
};
