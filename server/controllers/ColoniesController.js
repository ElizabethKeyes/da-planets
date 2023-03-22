import { coloniesService } from "../services/ColoniesService.js";
import BaseController from "../utils/BaseController.js";


export class ColoniesController extends BaseController {
  constructor() {
    super('/api/colonies')
    this.router
      .get('', this.getAllColonies)
      .post('', this.createColony)
  }

  async getAllColonies(req, res, next) {
    try {
      const colonies = await coloniesService.getAllColonies()
      res.send(colonies)
    } catch (error) {
      next(error)
    }
  }

  async createColony(req, res, next) {
    try {
      const colonyData = req.body
      const colony = await coloniesService.createColony(colonyData)
      res.send(colony)
    } catch (error) {
      next(error)
    }
  }
}