import { Schema } from "mongoose";


export const AnimalSchema = new Schema({
  name: { type: String, minLength: 1, maxLength: 100, required: true },
  emoji: { type: String, minLength: 1, maxLength: 25, required: true },
  talent: { type: String, minLength: 1, maxLength: 100, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
