import express, { Request, Response } from "express"

import {
  addTodo,
  completeTodo,
  getTodoByID,
  getTodos,
  uncompleteTodo,
} from "../services/todo"

export const todoRouter = express.Router()

todoRouter.get("/", async (_: Request, res: Response) => {
  try {
    const todos = await getTodos()
    return res.status(200).json({ todos })
  } catch (error) {
    return res.status(500).json({ error })
  }
})

todoRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const todo = await getTodoByID(id)
    if (!todo) {
      return res.status(404).json({ error: "Item not found" })
    }
    return res.status(200).json({ todo })
  } catch (error) {
    return res.status(500).json({ error })
  }
})

todoRouter.post("/", async (req: Request, res: Response) => {
  // make sure they included a todo item
  if (!req.body?.todo?.label) {
    return res.status(400).json({ error: "Invalid request body" })
  }
  try {
    const todo = await addTodo(req.body?.todo)
    return res.status(200).json({ todo })
  } catch (error) {
    return res.status(500).json({ error })
  }
})

todoRouter.post("/:id/complete", async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const todo = await completeTodo(id)
    if (!todo) {
      return res.status(404).json({ error: "Item not found" })
    }
    return res.status(200).json({ todo })
  } catch (error) {
    return res.status(500).json({ error })
  }
})

todoRouter.post("/:id/uncomplete", async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const todo = await uncompleteTodo(id)
    if (!todo) {
      return res.status(404).json({ error: "Item not found" })
    }
    return res.status(200).json({ todo })
  } catch (error) {
    return res.status(500).json({ error })
  }
})
