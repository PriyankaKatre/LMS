import express from "express";
import {
  register,
    login,
  logout,
  getUserProfile,
} from "../controllers/user.controlles.js";
import isAutheticated from "../middleware/isAutheticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile").get(isAutheticated, getUserProfile);

export default router;
