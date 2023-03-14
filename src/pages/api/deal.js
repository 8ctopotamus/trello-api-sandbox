import connectDB from "../../../middleware/mongodb"
import { Deal } from "../../../models/index.js"

async function handler({params, query}, res) {
  // const deals = await Deal.find()
  res.status(200).json({params, query})
}

export default connectDB(handler)