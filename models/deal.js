import mongoose from 'mongoose'

const dealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  trelloCards: {
    type: [
      { type: mongoose.Schema.Types.Mixed },
    ],
    default: [],
  }
})

export const Deal = mongoose.models.Deal || mongoose.model('Deal', dealSchema)
