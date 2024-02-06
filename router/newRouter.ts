import "reflect-metadata"
import  express, { Application, Request, Response }  from "express";
import { NewController } from "../controller/newController";
import { container } from "tsyringe";

const newRouter = express()
const news = container.resolve(NewController)

newRouter.route("/api/v1/news/:page/:qtd").get((req: Request, res: Response) => {
  return news.get(req, res)
})

newRouter.route("/api/v1/news/:id").get((req: Request, res: Response) => {
  return news.getById(req, res)
})
export default newRouter