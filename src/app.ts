import express from "express";
import todoRouter from "./routes/todoRouter";
const app = express();

// MIDDLEWARES
app.use(express.json({ limit: "10kb" }));

//ROUTES

// ROUTES
app.use("/api/v1/todos", todoRouter);
// app.use("/api/v1/users", userRouter);

// http://localhost:8000
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Our Express Server!!!!");
});

export default app;
