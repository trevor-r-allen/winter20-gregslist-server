import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class JobsService{
  async getAll(query = {}) {
    return await dbContext.Jobs.find(query)
  }

  async getOne(jobId) {
    let jobFound = await dbContext.Jobs.findById(jobId)
    if(!jobFound){
      throw new BadRequest("No job exists with that Id")
    }
    return jobFound
  }
  async create(body) {
    return await dbContext.Jobs.create(body)
  }

  async edit(id, body) {
    // await this.getOne(id)
    let updated = await dbContext.Jobs.findByIdAndUpdate(id, body, {new: true})
    if(!updated){
      throw new BadRequest("No job exists with that Id")
    }
    return updated
  }
  
  async delete(id) {
    let job = await dbContext.Jobs.findByIdAndDelete(id)
    if(!job){
      throw new BadRequest("No job exists with that Id")
    }
    return "successfully deleted"
   }
}

export const jobsService = new JobsService()