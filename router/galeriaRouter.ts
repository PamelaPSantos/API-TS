import "reflect-metadata"
import  express, { Application, Request, Response }  from "express";
import { GaleriaController } from "../controller/galeriaController";
import { container } from "tsyringe";

const galeriaRouter = express()
const galerias = container.resolve(GaleriaController)

galeriaRouter.route("/api/v1/galerias/:page/:qtd").get((req: Request, res: Response) => {
  return galerias.get(req, res)
})

galeriaRouter.route("/api/v1/galerias/:id").get((req: Request, res: Response) => {
  return galerias.getById(req, res)
})
export default galeriaRouter