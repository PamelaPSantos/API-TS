import  express, { Application, Request, Response }  from "express";
import database from "./infra/db";
import './shared/container';
import newRouter from "./router/newRouter";
import videoRouter from "./router/videosRouter";
import galeriaRouter from "./router/galeriaRouter";

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
    this.app.use('/api/v1/news', newRouter)
    this.app.use('/api/v1/videos', videoRouter)
    this.app.use('/api/v1/galerias', galeriaRouter) 
}}

export default new startUp(); 