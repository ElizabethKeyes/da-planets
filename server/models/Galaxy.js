import mongoose from "mongoose"
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 20 },
    stars: { type: Number, required: true, min: 1 }
  },
  { timestamps: true, toJson: { virtuals: true } }
)