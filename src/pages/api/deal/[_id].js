import connectDB from "../../../../middleware/mongodb"
import { Deal } from "../../../../models/index.js"

async function handler({ query: { _id } }, res) {
  if (!_id) {
    res.status(400).json({ error: 'we need an _id URL parameter' })
    return
  }

  const deal = await Deal.findById(_id)

  res.status(200).json(deal)
}

export default connectDB(handler)