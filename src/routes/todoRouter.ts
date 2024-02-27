import express from "express";
import { getAllTodos } from "../controllers/todoController";
const router = express.Router();

//localhost:8000/ap/v1/todos
http: router.route("/").get(getAllTodos);
// .post(addTodo);
// router.route("/:id").get(getAllTodos).post(addTodo);
export default router;
