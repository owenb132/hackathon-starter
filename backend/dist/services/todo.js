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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncompleteTodo = exports.completeTodo = exports.addTodo = exports.getTodoByID = exports.getTodos = void 0;
const uuid_1 = require("uuid");
const db_1 = require("./db");
/**
 * get all todo items in the database
 */
exports.getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const todoCollection = yield db_1.useCollection("todo");
    return yield todoCollection.find({}).toArray();
});
/**
 * get a todo item with the given ID
 */
exports.getTodoByID = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const todoCollection = yield db_1.useCollection("todo");
    return yield todoCollection.findOne({ _id });
});
/**
 * Create a new Todo item and store it in the database
 */
exports.addTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    const todoCollection = yield db_1.useCollection("todo");
    const _id = uuid_1.v4();
    const item = Object.assign(Object.assign({}, todo), { _id, complete: false });
    const { result } = yield todoCollection.insertOne(item);
    if (!result.ok) {
        throw new Error("Could not insert TodoItem");
    }
    return item;
});
/**
 * mark a todo item as complete
 */
exports.completeTodo = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const todoCollection = yield db_1.useCollection("todo");
    const { result } = yield todoCollection.updateOne({ _id }, {
        $set: { complete: true },
    });
    if (!result.ok) {
        throw new Error("Could not complete TodoItem");
    }
    return yield exports.getTodoByID(_id);
});
/**
 * mark a todo as incomplete
 */
exports.uncompleteTodo = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const todoCollection = yield db_1.useCollection("todo");
    const { result } = yield todoCollection.updateOne({ _id }, {
        $set: { complete: false },
    });
    if (!result.ok) {
        throw new Error("Could not uncomplete TodoItem");
    }
    return yield exports.getTodoByID(_id);
});
//# sourceMappingURL=todo.js.map