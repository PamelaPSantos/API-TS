import "reflect-metadata"
import  express, { Application, Request, Response }  from "express";
import database from "./infra/db";
import { NewController } from "./controller/newController";
import { VideoController } from "./controller/videoController";
import { GaleriaController } from "./controller/galeriaController";
import { container } from "tsyringe";
import './shared/container';

class startUp {
  public app: Application
  private _db: database = new database()
  private news = container.resolve(NewController)
  private videos = container.resolve(VideoController)
  private galerias = container.resolve(GaleriaController)

  constructor() {
    this.app = express()
    this._db.createConnection()
    this.routes()
  }
  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.2" })
    })
    this.app.route("/api/v1/news/:page/:qtd").get((req: Request, res: Response) => {
      return this.news.get(req, res)
    })
    this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
      return this.news.getById(req, res)
    })
    this.app.route("/api/v1/videos/:page/:qtd").get((req: Request, res: Response) => {
      return this.videos.get(req, res)
    })
    this.app.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
      return this.videos.getById(req, res)
    })
    this.app.route("/api/v1/galerias/:page/:qtd").get((req: Request, res: Response) => {
      return this.galerias.get(req, res)
    })
    this.app.route("/api/v1/galerias/:id").get((req: Request, res: Response) => {
      return this.galerias.getById(req, res)
    },
    )
  }
}

export default new startUp(); 