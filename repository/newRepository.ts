import mongoose from "mongoose"
import { NewSchema } from "../models/newSchema"

export const newRepository = mongoose.model("new", NewSchema )