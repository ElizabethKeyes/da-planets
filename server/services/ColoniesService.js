import { dbContext } from "../db/DbContext.js"


class ColoniesService {

  async getAllColonies() {
    const colonies = dbContext.Colonies.find()
    return colonies
  }

  async createColony(colonyData) {
    const colony = await dbContext.Colonies.create(colonyData)
    return colony
  }
}

export const coloniesService = new ColoniesService()