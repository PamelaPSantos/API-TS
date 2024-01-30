"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSchema = exports.New = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const core_1 = require("../models/core");
class New extends core_1.Core {
}
exports.New = New;
exports.NewSchema = new mongoose_1.default.Schema({
    titulo: { type: String },
    texto: { type: String },
    autor: { type: String },
    imagem: { type: String },
    dataPublicacao: { type: String },
    link: { type: String },
    ativo: { Boolean }
});
