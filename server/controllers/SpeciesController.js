import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";


export class SpeciesController extends BaseController {
  constructor() {
    super('/api/species')
    this.router
      .get('', this.getAllSpecies)
      .post('', this.createSpecies)
  }

  async getAllSpecies(req, res, next) {
    try {
      const species = await speciesService.getAllSpecies()
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async createSpecies(req, res, next) {
    try {
      const speciesData = req.body
      const species = await speciesService.createSpecies(speciesData)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }
}