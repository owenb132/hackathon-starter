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
exports.useCollection = void 0;
const mongodb_1 = require("mongodb");
const useMongoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        mongodb_1.MongoClient.connect("mongodb://localhost:27017", (err, client) => {
            if (!!err) {
                return reject(err);
            }
            else {
                return resolve(client);
            }
        });
    });
});
exports.useCollection = (collectionName) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield useMongoDB();
    const db = yield client.db("hackathonstarter");
    return yield db.collection(collectionName);
});
//# sourceMappingURL=db.js.map