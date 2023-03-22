import mongoose from "mongoose"
const Schema = mongoose.Schema

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 1, maxLength: 50 },
    biome: { type: String, required: true, minLength: 1, maxLength: 50 },
    atmosphere: { type: Boolean, required: true, default: true },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: "Galaxy" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PlanetSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})