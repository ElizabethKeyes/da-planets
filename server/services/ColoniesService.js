import { dbContext } from "../db/DbContext.js"


class ColoniesService {

  async getAllColonies() {
    const colonies = dbContext.Colonies.find()
    return colonies
  }

  async getColoniesByPlanet(planetId) {
    const colonies = await dbContext.Colonies.find({ planetId }).populate('Planet')
    return colonies
  }

  async colonyById(colonyId) {
    const colony = await dbContext.Colonies.findById(colonyId)
    return colony
  }

  async createColony(colonyData) {
    const colony = await dbContext.Colonies.create(colonyData)
    return colony
  }
}

export const coloniesService = new ColoniesService()