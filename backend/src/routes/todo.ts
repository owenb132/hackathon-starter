import express, { Request, Response } from "express"

import { addTodo } from "../services/todo"

export const todoRouter = express.Router()

todoRouter.get("/", (req: Request, res: Response) => {
  res.send("test")
})

todoRouter.post("/", async (req: Request, res: Response) => {
  const { todo } = req.body
  try {
    const result = await addTodo(todo)
    res.status(200).json({ todo: result })
  } catch (error) {
    res.status(500).json({ error })
  }
})

todoRouter.post("/complete", (req: Request, res: Response) => {

})
