"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./infra/db"));
const newController_1 = __importDefault(require("./controller/newController"));
const videoController_1 = __importDefault(require("./controller/videoController"));
const galeriaController_1 = __importDefault(require("./controller/galeriaController"));
class startUp {
    constructor() {
        this._db = new db_1.default();
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.2" });
        });
        this.app.route("/api/v1/news/:page/:qtd").get((req, res) => {
            return newController_1.default.get(req, res);
        });
        this.app.route("/api/v1/news/:id").get((req, res) => {
            return newController_1.default.getById(req, res);
        });
        this.app.route("/api/v1/videos/:page/:qtd").get((req, res) => {
            return videoController_1.default.get(req, res);
        });
        this.app.route("/api/v1/videos/:id").get((req, res) => {
            return videoController_1.default.getById(req, res);
        });
        this.app.route("/api/v1/galerias/:page/:qtd").get((req, res) => {
            return galeriaController_1.default.get(req, res);
        });
        this.app.route("/api/v1/galerias/:id").get((req, res) => {
            return galeriaController_1.default.getById(req, res);
        });
    }
}
exports.default = new startUp();
