import  express  from "express";
import {
  createCourse,
  getCreatorCourses,
  editCourse,
  getCourseById,
  createLecture,
  getCourseLectures,
} from "../controllers/course.controllers.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import upload from "../utiles/multer.js";

const router = express.Router();

router.route("/").post(isAuthenticated, createCourse);
router.route("/").get(isAuthenticated, getCreatorCourses);
router
  .route("/:courseId")
  .put(isAuthenticated, upload.single("courseThumbnail"), editCourse);
router.route("/:courseId").get(isAuthenticated, getCourseById);
router.route("/:courseId/lecture").post(isAuthenticated, createLecture);
router.route("/:courseId/lecture").get(isAuthenticated, getCourseLectures);


export default router;
