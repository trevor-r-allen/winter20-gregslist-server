import mongoose from "mongoose";
const Schema = mongoose.Schema

const Job = new Schema(
  {
    company: {type: String, required: true},
    jobTitle : {type: String, required: true},
    hours: {type: Number, required: true, min: 1940, max: 2022},
    rate: {type: Number, required: true},
    description: {type: String, maxlength: 144},
  },
  {timestamps: true, toJSON: {virtuals: true}}
)

export default Job