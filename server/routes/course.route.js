import { express } from "express";
import { createCourse } from "../controllers/course.controllers";
import isAutheticated from "../middleware/isAutheticated";

const router = express.Router();

router.route("/course").post(isAutheticated, createCourse);

export default router;
