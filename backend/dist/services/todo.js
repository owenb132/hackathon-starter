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
exports.addTodo = void 0;
const uuid_1 = require("uuid");
const db_1 = require("./db");
exports.addTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    const todoCollection = yield db_1.useCollection("todo");
    const guid = uuid_1.v4();
    const item = Object.assign(Object.assign({}, todo), { guid, complete: false });
    const { result } = yield todoCollection.insertOne(item);
    if (!result.ok) {
        throw new Error("Could not insert TodoItem");
    }
    return item;
});
//# sourceMappingURL=todo.js.map