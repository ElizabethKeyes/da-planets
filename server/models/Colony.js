import mongoose from "mongoose"
const Schema = mongoose.Schema

export const ColonySchema = new Schema(
  {
    name: { type: String, required: true, minLength: 1, maxLength: 50 },
    population: { type: Number, required: true },
    planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
    speciesId: { type: Schema.Types.ObjectId, required: true, ref: 'Species' }
  }
)