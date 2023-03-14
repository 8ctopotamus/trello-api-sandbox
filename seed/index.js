import mongoose from 'mongoose'
import { Deal } from '../models/index.js'
import dealSeeds from './deals.json' assert { type: "json" }

mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/trello-api-sandbox')

mongoose.connection.once('open', async () => {
  console.log('Seeding db')

  await Deal.deleteMany()

  await Deal.insertMany(dealSeeds)
  console.log('Deals seeded')

  console.log('Done')
  process.exit(0)
})