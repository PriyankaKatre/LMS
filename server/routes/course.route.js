import  express  from "express";
import {
  createCourse,
  getCreatorCourses,
  editCourse,
} from "../controllers/course.controllers.js";
import isAutheticated from "../middleware/isAutheticated.js";
import upload from "../utiles/multer.js";

const router = express.Router();

router.route("/").post(isAutheticated, createCourse);
router.route("/").get(isAutheticated, getCreatorCourses);
router
  .route("/:courseId")
  .put(isAutheticated, upload.single("courseThumbnail"), editCourse);

export default router;
