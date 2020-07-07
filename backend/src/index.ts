import express from "express"

import { todoRouter } from "./routes/todo"

const app = express()

app.use(express.json())

app.use("/todo", todoRouter)

app.listen(process.env.PORT || 8080, () => console.log("Server started."))
