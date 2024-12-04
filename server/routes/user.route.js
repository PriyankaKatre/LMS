import express from "express";
import {
  register,
  login,
  logout,
  getUserProfile,
  updateProfile,
} from "../controllers/user.controlles.js";
import isAutheticated from "../middleware/isAutheticated.js";
import upload from "./../utiles/multer.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile").get(isAutheticated, getUserProfile);
router
  .route("/profile/update")
  .put(isAutheticated, upload.single("profilePhoto"), updateProfile);

export default router;
