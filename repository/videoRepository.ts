import mongoose from "mongoose";
import { Video } from "../models/videos";


const VideoSchema = new mongoose.Schema<Video>({
 titulo: {String},
 texto: {String},
 imagem: {String},
 duracao: {String},
 link: {String},
 url: {String},
 dataPublicacao: {Date},
 ativo: {Boolean}
})


export const videosRepository = mongoose.model<Video>("videos", VideoSchema)
