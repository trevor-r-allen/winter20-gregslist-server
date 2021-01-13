import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";

export class HousesController extends BaseController{
  constructor(){
    super('api/houses')
    this.router
    .get("", this.getAll)
    .get("/:carId", this.getOne)
    .post("", this.create)
    .put("/:id", this.edit)
    .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      res.send(await housesService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  
  async getOne(req,res,next) {
    try {
      res.send(await housesService.getOne(req.params.carId))
    } catch (error) {
      next(error)
    }
  }

  async create(req,res,next) {
  try {
    res.send(await housesService.create(req.body))
  } catch (error) {
    next(error)
  }
  }
  
  async edit(req,res,next) {
    try {
      res.send(await housesService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req,res,next) {
    try {
      res.send(await housesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}