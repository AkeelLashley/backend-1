import { ExpressFunction } from "../types/ExpressFunction";
// import { type Request, type Response, type NextFunction } from "express";

export const getAllTodos: ExpressFunction = async (req, res) => {
  try {
    const todos = [{ title: "Hello" }, { title: "Welcome" }];

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: todos,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
