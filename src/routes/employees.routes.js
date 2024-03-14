import { Router } from "express";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
} from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployee);

router.put("/employees", updateEmployee);

router.delete("/employees", deleteEmployee);

export default router;
