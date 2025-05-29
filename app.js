import express from "express";
import employeesRouter from "./routes/employees.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Employees router
app.use("/employees", employeesRouter);

// Error-handling middleware (must come last)
app.use(errorHandler);

export default app;
