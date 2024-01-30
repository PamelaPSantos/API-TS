import { IVideoService } from "./iVideoService";
import { Result } from "../infra/result";
import { videosRepository } from "../repository/videoRepository"
import { Video } from "../models/videos";

export class VideoService implements IVideoService {

  async get (_id: string): Promise<Video> {
    let result = await videosRepository.findById(_id)
    return result
  }
  async getAll(page: number, qtd: number): Promise<Result<Video>> {
    let result = new Result<Video>();
    result.Page =  page;
    result.Qtd = qtd;
    result.Total = await videosRepository.countDocuments({});
    result.Data = await videosRepository.find({}).skip((page * qtd) - qtd).limit(qtd)
    return result;
  }
}