import { Schema, model, models } from 'mongoose'

const dealSchema = new Schema({
  title: {
    type: String,
    required: true,
  }
})

export const Deal = models.Deal || model('Deal', dealSchema)
