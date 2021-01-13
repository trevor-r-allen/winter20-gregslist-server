import ValueSchema from "../models/Value";
import mongoose from "mongoose";

import CarSchema from "../models/Car"
import JobSchema from "../models/Job"
import HouseSchema from "../models/House"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema)
  Houses = mongoose.model("House", HouseSchema)
  Jobs = mongoose.model("Job", JobSchema)
}

export const dbContext = new DbContext();
