"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const todo_1 = require("../services/todo");
exports.todoRouter = express_1.default.Router();
exports.todoRouter.get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.getTodos();
        return res.status(200).json({ todos });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}));
exports.todoRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield todo_1.getTodoByID(id);
        if (!todo) {
            return res.status(404).json({ error: "Item not found" });
        }
        return res.status(200).json({ todo });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}));
exports.todoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    console.log(JSON.stringify(req.body));
    // make sure they included a todo item
    if (!((_b = (_a = req.body) === null || _a === void 0 ? void 0 : _a.todo) === null || _b === void 0 ? void 0 : _b.label)) {
        return res.status(400).json({ error: "Invalid request body" });
    }
    try {
        const todo = yield todo_1.addTodo((_c = req.body) === null || _c === void 0 ? void 0 : _c.todo);
        return res.status(200).json({ todo });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}));
exports.todoRouter.post("/:id/complete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield todo_1.completeTodo(id);
        if (!todo) {
            return res.status(404).json({ error: "Item not found" });
        }
        return res.status(200).json({ todo });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}));
exports.todoRouter.post("/:id/uncomplete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield todo_1.uncompleteTodo(id);
        if (!todo) {
            return res.status(404).json({ error: "Item not found" });
        }
        return res.status(200).json({ todo });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}));
//# sourceMappingURL=todo.js.map