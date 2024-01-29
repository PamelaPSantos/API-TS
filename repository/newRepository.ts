import mongoose from "mongoose"
import { NewSchema } from "../models/new"

export const newRepository = mongoose.model("new", NewSchema )