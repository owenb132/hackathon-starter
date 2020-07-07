import { v4 as uuid } from "uuid"

import { useCollection } from "./db"
import { TodoItem } from "../models/todo"

export const addTodo = async (todo: TodoItem): Promise<TodoItem> => {
  const todoCollection = await useCollection<TodoItem>("todo")
  const guid = uuid()
  const item: TodoItem = { ...todo, guid, complete: false }
  const { result } = await todoCollection.insertOne(item)
  if (!result.ok) {
    throw new Error("Could not insert TodoItem")
  }
  return item
}
