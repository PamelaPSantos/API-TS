import "reflect-metadata"
import  express, { Application, Request, Response }  from "express";
import { VideoController } from "../controller/videoController";
import { container } from "tsyringe";

const videoRouter = express()
const videos = container.resolve(VideoController)

videoRouter.route("/api/v1/videos/:page/:qtd").get((req: Request, res: Response) => {
  return videos.get(req, res)
})

videoRouter.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
  return videos.getById(req, res)
})
export default videoRouter