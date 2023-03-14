import connectDB from "../../../middleware/mongodb"
import { Deal } from "../../../models/index.js"

async function handler(req, res) {
  const deals = await Deal.find()
  res.status(200).json(deals)
}

export default connectDB(handler)