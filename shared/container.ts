import "reflect-metadata"
import { container } from "tsyringe"
import { GaleriaService } from "../services/galeriaService"
import { NewService } from "../services/INewService"
import { VideoService } from "../services/videoService"

container.register(
  "IVideoService", 
  { useClass: VideoService })

container.register(
  "IGaleriaService", 
  { useClass: GaleriaService })
container.register(
  "INewService", 
  { useClass: NewService })