import  express  from "express";
import { createCourse } from "../controllers/course.controllers.js";
import isAutheticated from "../middleware/isAutheticated.js";

const router = express.Router();

router.route("/course").post(isAutheticated, createCourse);

export default router;
