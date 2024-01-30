import  express, { Application, Request, Response }  from "express";
import database from "./infra/db";
import newController from "./controller/newController";
import videoController from "./controller/videoController";
import galeriaController from "./controller/galeriaController";

class startUp {
  public app: Application
  private _db: database = new database()

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
      return newController.get(req, res)
    })
    this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
      return newController.getById(req, res)
    })
    this.app.route("/api/v1/videos/:page/:qtd").get((req: Request, res: Response) => {
      return videoController.get(req, res)
    })
    this.app.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
      return videoController.getById(req, res)
    })
    this.app.route("/api/v1/galerias/:page/:qtd").get((req: Request, res: Response) => {
      return galeriaController.get(req, res)
    })
    this.app.route("/api/v1/galerias/:id").get((req: Request, res: Response) => {
      return galeriaController.getById(req, res)
    },
    )
  }
}

export default new startUp(); 