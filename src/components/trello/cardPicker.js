import { useState, useEffect } from "react"

const TrelloCardPicker = ({
  deal,
  boards = []
}) => {
  const [selectedBoardId, setSelectedBoardId] = useState(null)
  const [lists, setLists] = useState([])
  
  const selectedBoard = boards.find(({ id }) => id === selectedBoardId)

  useEffect(() => {
    if (selectedBoardId) {
      getBoardListsAndCards(selectedBoardId)
    }
  }, [selectedBoardId])

  const getBoardListsAndCards = async id => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/trello/cards/${id}`)
    const lists = await response.json()
    setLists(lists)
  }

  return (
    <>
      <h2 className="text-2xl font-bold underline">Watched Trello Cards:</h2>
      {deal.trelloCards.length > 0 ? deal.trelloCards.map(card => {
        return 'CARD'
      }) : (
        <p>There are no trello cards assigned yet.</p>
      )}

      {selectedBoard ? (
        <>
          <h2 className="mt-4 text-2xl font-bold underline">{selectedBoard?.name}</h2>
          <button onClick={() => setSelectedBoardId(null)}>&times; Close</button>
          <div className="grid gap-4 grid-cols-6">
            {lists.map(({ name, cards = []}) => (
              <div className="flex flex-col max-w-sm mr-1 mb-3 border-2 border-black p-2">
                <h3 className="font-bold">{name}</h3>
                {cards.map(card => {
                  // console.log(card)
                  return (
                    <div className="mb-2 border-2 border-black p-2">
                      {card.name.length > 80 ? `${card.name.slice(0, 80)}...` : card.name}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold underline">Trello Boards</h2>
          <ul>
            {boards.length > 0 ? boards.map(({ id, name }) => {
              return (
                <li key={id}>
                  {name}
                  <button onClick={() => setSelectedBoardId(id)}>Get Lists</button>
                </li>
              )
            }) : (
              <p>No Trello boards detected.</p>
            )}
          </ul>
        </>
      )}
    </>
  )
}

export default TrelloCardPicker