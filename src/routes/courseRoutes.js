import express from "express";
import {
  deleteContentCourse,
  deleteCourse,
  getCategories,
  getCourseById,
  getCourses,
  getDetailContent,
  postContentCourse,
  postCourse,
  updateContentCourse,
  updateCourse,
} from "../controllers/courseController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import multer from "multer";
import { fileStorageCourse, fileFilter } from "../utils/multer.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { mutateContentSchema } from "../utils/schema.js";

const courseRoutes = express.Router();

const upload = multer({
  storage: fileStorageCourse,
  fileFilter,
});

courseRoutes.get("/courses", verifyToken, getCourses);
courseRoutes.get("/categories", verifyToken, getCategories);

courseRoutes.post(
  "/courses",
  verifyToken,
  upload.single("thumbnail"),
  postCourse
);
courseRoutes.put(
  "/courses/:id",
  verifyToken,
  upload.single("thumbnail"),
  updateCourse
);
courseRoutes.delete("/courses/:id", verifyToken, deleteCourse);
courseRoutes.get("/courses/:id", verifyToken, getCourseById);

courseRoutes.post(
  "/courses/contents",
  verifyToken,
  validateRequest(mutateContentSchema),
  postContentCourse
);

courseRoutes.put(
  "/courses/contents/:id",
  verifyToken,
  validateRequest(mutateContentSchema),
  updateContentCourse
);

courseRoutes.delete("/courses/contents/:id", verifyToken, deleteContentCourse);
courseRoutes.get("/courses/contents/:id", verifyToken, getDetailContent);

export default courseRoutes;
