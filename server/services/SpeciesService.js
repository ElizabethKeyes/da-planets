import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class SpeciesService {

  async getAllSpecies() {
    const species = await dbContext.Species.find()
    return species
  }

  async getSpeciesByColony(colonyId) {
    const species = dbContext.Species.find({ colonyId })
    if (!species) {
      throw new BadRequest()
    }
    return species
  }

  async createSpecies(speciesData) {
    const species = await dbContext.Species.create(speciesData)
    return species
  }

}

export const speciesService = new SpeciesService()