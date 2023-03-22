import { coloniesService } from "../services/ColoniesService.js";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController {
  constructor() {
    super('/api/planets')
    this.router
      .get('', this.getAllPlanets)
      .get('/:planetId/colonies', this.getColoniesByPlanet)
      .post('', this.createPlanet)
  }

  async getAllPlanets(req, res, next) {
    try {
      const planets = await planetsService.getAllPlanets()
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getColoniesByPlanet(req, res, next) {
    try {
      const planetId = req.params.planetId
      const colonies = await coloniesService.getColoniesByPlanet(planetId)
      res.send(colonies)
    } catch (error) {
      next(error)
    }
  }

  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const planet = await planetsService.createPlanet(planetData)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}