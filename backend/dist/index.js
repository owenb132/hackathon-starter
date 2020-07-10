"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const todo_1 = require("./routes/todo");
// create a new express app
// this will be used to add all routes and request handlers
const app = express_1.default();
// allow express to accept application/json requests
app.use(express_1.default.json());
// allow the backend to be accessed from your frontend
app.use(cors_1.default());
// add the todo route
// all routes specified by todoRouter will be hit with /todo/{route}
app.use("/todo", todo_1.todoRouter);
// start the app
app.listen(process.env.PORT || 8080, () => console.log("Server started."));
//# sourceMappingURL=index.js.map