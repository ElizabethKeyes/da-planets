import { dbContext } from "../db/DbContext.js"


class SpeciesService {

  async getAllSpecies() {
    const species = await dbContext.Species.find()
    return species
  }

  async createSpecies(speciesData) {
    const species = await dbContext.Species.create(speciesData)
    return species
  }

}

export const speciesService = new SpeciesService()