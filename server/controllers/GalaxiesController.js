import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxiesController extends BaseController {
  constructor() {
    super('/api/galaxies')
    this.router
      .get('', this.getAllGalaxies)
      .get('/:galaxyId', this.getGalaxyById)
      .post('', this.createGalaxy)
  }

  async getAllGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAllGalaxies()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxyById(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const galaxy = await galaxiesService.getGalaxyById(galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const galaxy = await galaxiesService.createGalaxy(galaxyData)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}