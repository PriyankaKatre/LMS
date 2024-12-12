import express from "express";
import {
  register,
  login,
  logout,
  getUserProfile,
  updateProfile,
} from "../controllers/user.controlles.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import upload from "./../utils/multer.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile").get(isAuthenticated, getUserProfile);
router
  .route("/profile/update")
  .put(isAuthenticated, upload.single("profilePhoto"), updateProfile);

export default router;
