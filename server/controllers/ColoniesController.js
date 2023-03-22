import { coloniesService } from "../services/ColoniesService.js";
import { planetsService } from "../services/PlanetsService.js";
import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";


export class ColoniesController extends BaseController {
  constructor() {
    super('/api/colonies')
    this.router
      .get('', this.getAllColonies)
      // .get('/:colonyId/planets', this.getPlanetsOccupiedByColony)
      .get('/:colonyId/species', this.getSpeciesByColony)
      .get('/:colonyId', this.colonyById)
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

  async getSpeciesByColony(req, res, next) {
    try {
      const colonyId = req.params.colonyId
      const species = await speciesService.getSpeciesByColony(colonyId)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async colonyById(req, res, next) {
    try {
      const colonyId = req.params.colonyId
      const colony = await coloniesService.colonyById(colonyId)
      res.send(colony)
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

  // async getPlanetsOccupiedByColony(req, res, next) {
  //   try {
  //     const colonyId = req.params.colonyId
  //     const planets = await planetsService.getPlanetsOccupiedByColony(colonyId)
  //     res.send(planets)
  //   } catch (error) {
  //     next(error)
  //   }
  // }