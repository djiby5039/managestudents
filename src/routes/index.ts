import express from "express";
import StudentController from "../controllers/StudentController";

const router = express.Router();

router.get("/student", StudentController.getAllStudent);
router.get("/student/:id", StudentController.getStudent);
router.post("/student/", StudentController.createStudent);
router.put("/student/:id", StudentController.UpdateStudent);
router.delete("/student/:id", StudentController.deleteStudent);

export default router;
