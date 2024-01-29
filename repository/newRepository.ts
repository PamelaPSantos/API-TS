import mongoose from "mongoose";
import { New, NewSchema } from "../models/new";

const newSchema = new mongoose.Schema<New>({
  titulo: { type: String },
  texto: { type: String },
  autor: { type: String },
  imagem: { type: String },
  dataPublicacao: { type: String },
  link: { type: String },
  ativo: { type: Boolean } 
});

export const newRepository = mongoose.model<New>("new", newSchema); 
