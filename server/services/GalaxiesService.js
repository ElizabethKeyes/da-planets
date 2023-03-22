import { dbContext } from "../db/DbContext.js"


class GalaxiesService {

  async getAllGalaxies() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }

  async getGalaxyById(galaxyId) {
    const galaxy = dbContext.Galaxies.findById(galaxyId)
    return galaxy
  }

  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }
}

export const galaxiesService = new GalaxiesService()