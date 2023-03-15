import { useState, useEffect } from "react"

const TrelloCardPicker = ({
  deal,
  boards = [],
}) => {
  const [selectedBoardId, setSelectedBoardId] = useState(null)
  const [lists, setLists] = useState([])
  const [cardIds, setCardIds] = useState([])

  const selectedBoard = boards.find(({ id }) => id === selectedBoardId)

  useEffect(() => {
    if (selectedBoardId) {
      getBoardListsAndCards(selectedBoardId)
    }
  }, [selectedBoardId])

  useEffect(() => {
    setCardIds(deal.trelloCards)
  }, [deal])

  const getBoardListsAndCards = async id => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/trello/cards/${id}`)
    const lists = await response.json()
    setLists(lists)
  }

  const toggleCardId = id => {
    
    const updatedCardIds = cardIds.includes(id)
      ? cardIds.filter(cardId => cardId !== id)
      : [...cardIds, id]
    console.log('upated', updatedCardIds)
    setCardIds(updatedCardIds)
  }

  const saveCardIds = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/deal/${deal._id}`, {
      method: 'PUT',
      body: JSON.stringify({
        trelloCards: cardIds,
      })
    })
    window.location.reload()
  }
console.log(cardIds)
  return (
    <>
      <div>
        
        <button
          onClick={saveCardIds}
          className="btn btn-success"
          disabled={cardIds.length === 0}
        >
          &#10004; Save
        </button>
      </div>

      <h2 className="text-lg">Watched Trello Cards:</h2>
      {deal.populatedTrelloCards.length > 0 ? deal.populatedTrelloCards.map(card => {
        const opacity = cardIds.includes(card.id) ? 1 : .5
        return (
          <div className={`card mb-2 border-2 border-black p-2`} style={{opacity}}>
            <h4 className="text-lg">{card.name.length > 80 ? `${card.name.slice(0, 80)}...` : card.name}</h4>
            <button 
              class="btn btn-error"
              onClick={() => toggleCardId(card.id)}
            >
              Remove
            </button>
          </div>
        )
      }) : (
        <div className="alert alert-info shadow-lg">
          <div>
            <span>No trello cards being watched yet.</span>
          </div>
        </div>
      )}

      <br/>

      {selectedBoard ? (
        <>
          <div className="flex justify-between align-center my-5">
            <h2 className="text-lg font-bold mr-5">{selectedBoard?.name}</h2>
            <button 
              onClick={() => setSelectedBoardId(null)}
              className="btn  mr-2"
            >
              &times; Close
            </button>
          </div>
          <div className="grid gap-4 grid-cols-6">
            {lists.map(({ name, cards = []}) => (
              <div className="flex flex-col max-w-sm mr-1 mb-3 border-2 border-black p-2">
                <h3 className="text-lg font-bold mb-2">{name}</h3>
                {cards.map(card => {
                  // console.log(card)
                  return (
                    <div className="card mb-2 border-2 border-black p-2">
                      <div className="form-control">
                        <label className="cursor-pointer label">
                          <span className="label-text">Watch Card</span>
                          <input
                            type="checkbox"
                            onChange={() => toggleCardId(card.id)}
                            checked={deal.trelloCards.includes(card.id) || cardIds.includes(card.id)} 
                            className="checkbox checkbox-accent" 
                          />
                        </label>
                      </div>
                      <h4>{card.name.length > 80 ? `${card.name.slice(0, 80)}...` : card.name}</h4>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">Trello Boards</h2>
          <ul>
            {boards.length > 0 ? boards.map(({ id, name }) => {
              return (
                <li className="flex align-center mb-5" key={id}>
                  <h2 className="font-bold">{name}</h2>
                  <button 
                    onClick={() => setSelectedBoardId(id)}
                    className="btn"
                  >
                    Get Lists
                  </button>
                </li>
              )
            }) : (
              <div className="alert alert-warning shadow-lg">
                <div>
                  <span>No Trello boards detected.</span>
                </div>
              </div>
            )}
          </ul>
        </>
      )}
    </>
  )
}

export default TrelloCardPicker