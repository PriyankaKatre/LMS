import mongoose, { Mongoose } from "mongoose";
import { type } from "os";

const courseSchema = mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    courseLevel: {
      type: String,
      enum: ["Beginner", "Medium", "Advance"],
    },
    coursePrice: {
      type: number,
    },
    courseThumbnail: {
      type: String,
    },
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lectures: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: Lecture,
    },
    creator: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model("Course", courseSchema);
