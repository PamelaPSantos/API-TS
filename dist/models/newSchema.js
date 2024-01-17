"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.NewSchema = new mongoose_1.default.Schema({
    titulo: { type: String },
    chapeu: { type: String },
    texto: { type: String },
    autor: { type: String },
    imagem: { type: String },
    dataPublicacao: { type: String },
    tags: { type: String },
    link: { type: String },
    ativo: { Boolean }
});
