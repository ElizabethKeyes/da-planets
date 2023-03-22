import { dbContext } from "../db/DbContext.js";


class PlanetsService {
  getPlanetsByGalaxy(galaxyId) {
    const planets = dbContext.Planets.find({ galaxyId })
    return planets
  }

  async getAllPlanets() {
    const planets = await dbContext.Planets.find()
    return planets
  }

  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }

}

export const planetsService = new PlanetsService()