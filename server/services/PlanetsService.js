import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";


class PlanetsService {
  getPlanetsByGalaxy(galaxyId) {
    const planets = dbContext.Planets.find({ galaxyId }).populate('galaxy')
    return planets
  }

  async getAllPlanets() {
    const planets = await dbContext.Planets.find()
    return planets
  }

  // async getPlanetsOccupiedByColony(colonyId) {
  //   const planets = await dbContext.Planets.find({ colonyId })
  //   return planets
  // }

  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }

}

export const planetsService = new PlanetsService()