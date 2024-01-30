import { IGaleriaService } from "./iGaleriaService";
import { Result } from "../infra/result";
import { GaleriaRepository } from "../repository/galeriaRepository";
import { Galeria } from "../models/galeria";

export class VideoService implements IGaleriaService {

  async get (_id: string): Promise<Galeria> {
    let result = await GaleriaRepository.findById(_id)
    return result
  }
  async getAll(page: number, qtd: number): Promise<Result<Galeria>> {
    let result = new Result<Galeria>();
    result.Page =  page;
    result.Qtd = qtd;
    result.Total = await GaleriaRepository.countDocuments({});
    result.Data = await GaleriaRepository.find({}).skip((page * qtd) - qtd).limit(qtd)
    return result;
  }
}