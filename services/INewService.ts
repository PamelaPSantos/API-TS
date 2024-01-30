import { INewService } from "../contracts/iNewService";
import { Result } from "../infra/result";
import { newRepository } from "../repository/newRepository"
import { New } from "../models/new";

export class NewService implements INewService {
  async get (_id: string): Promise<New> {
    let result = await newRepository.findById(_id)
    return result
  }
  async getAll(page: number, qtd: number): Promise<Result<New>> {
    let result = new Result<New>();
    result.Page =  page;
    result.Qtd = qtd;
    result.Total = await newRepository.countDocuments({});
    result.Data = await newRepository.find({}).skip((page * qtd) - qtd).limit(qtd)
    return result;
  }
}