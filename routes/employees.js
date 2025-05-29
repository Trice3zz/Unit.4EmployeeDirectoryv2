import express from "express";
import employees from "../db/employees.js";

const router = express.Router();

// GET /employees
router.get("/", (req, res) => {
  res.send(employees);
});

// GET /employees/random
router.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

// GET /employees/:id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((e) => e.id === id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});

// POST /employees
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).send("Name is required");
  }

  const newEmployee = {
    id: employees.length ? Math.max(...employees.map(e => e.id)) + 1 : 1,
    name: name.trim()
  };

  employees.push(newEmployee);
  res.status(201).send(newEmployee);
});

export default router;
