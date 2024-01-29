import mongoose from "mongoose";
import { Core } from "../models/core"

export class New extends Core {
  autor: String
}

export const NewSchema = new mongoose.Schema({
  titulo: { type: String },
  texto: { type: String },
  autor: { type: String },
  imagem: { type: String },
  dataPublicacao: { type: String },
  link: { type: String },
  ativo: { Boolean }
})