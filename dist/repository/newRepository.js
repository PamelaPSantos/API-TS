"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const newSchema_1 = require("../models/newSchema");
exports.newRepository = mongoose_1.default.model("new", newSchema_1.NewSchema);
