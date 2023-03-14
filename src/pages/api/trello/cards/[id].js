import connectDB from "../../../../../middleware/mongodb.js"
import { getBoardListsAndCards } from "../../../../../utils/trello.js"

async function handler({ query: { id } }, res) {
  if (!id) {
    res.status(400).json({ error: 'we need an id URL parameter' })
    return
  }

  const lists = await getBoardListsAndCards(id)

  res.status(200).json(lists)
}

export default connectDB(handler)