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
    return res.status(400).json({
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
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log("password", user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
    generateToken(res, user, `welcome back ${user.name}`);
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to Login",
    });
  }
};

export const logout = async (_, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to Login",
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    let userId = req.id;

    //populate todo
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Profile not found",
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Failed to load user",
    });
  }
};

const updateProfile = async (req, res) => {
    try {
        const userId = req.id;
        const { name } = req.body;
        const profilePhoto = req.file

        const user = await user.findById(userId);
        if (!user) {
            return res.status(400).json({
              success: false,
              message: "User Not Found",
            });
        }
        const updatedData = { name, photoUrl };
        
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: "Failed to Update profile",
      });
    }
}
