import connectDB from "../../../../middleware/mongodb"
import { Deal } from "../../../../models/index.js"
import { getBoards, getCards } from "../../../../utils/trello"

async function handler({ method, query: { _id }, body }, res) {
  if (!_id) {
    res.status(400).json({ error: 'we need an _id URL parameter' })
    return
  }
  if (method === 'GET') {
    let deal = await Deal.findById(_id)
    deal = deal.toObject()
    const boards = await getBoards()
    const populatedTrelloCards = await getCards(deal.trelloCards)
    
    console.log(deal, populatedTrelloCards)

    res.status(200).json({ 
      boards, 
      deal: {
        ...deal,
        populatedTrelloCards,
      }, 
    })
  } else if (method === 'PUT') {
    
    const updatedDeal = await Deal.findByIdAndUpdate(_id, {
      trelloCards: body.trelloCards
    }, {new: true})

    console.log('updatedDeal', updatedDeal) 

    res.status(200).send()
  }
}

export default connectDB(handler)