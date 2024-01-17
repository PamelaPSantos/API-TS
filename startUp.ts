import  express, { Application, Request, Response }  from "express";
import database from "./infra/db";
import newController from "./controller/newController";

class startUp {
  public app: Application
  private _db: database = new database

  constructor() {
    this.app = express()
    this._db.createConnection()
    this.routes()
  }
  routes() {
    this.app.route("/").get((req, res) => {
      res.send({versao: "0.0.1"})
    })
    this.app.route("/api/v1/new/:page/:qtd").get((req: Request, res: Response) => {
      return newController.get(req, res)
    })
    this.app.route("/api/v1/new/:id").get((req: Request, res: Response) => {
      return newController.getById(req, res)
    })
  }
}

export default new startUp(); 