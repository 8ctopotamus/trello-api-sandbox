import { useState } from "react"

const TrelloCardPicker = ({
  deal,
  boards = []
}) => {
  const [lists, setLists] = useState(null)
  
  const getBoardListsAndCards = async id => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/trello/cards/${id}`)
    const json = await response.json()
    console.log(json)
  }

  return (
    <>
      <h2 className="text-2xl font-bold underline">Watched Trello Cards:</h2>
      {deal.trelloCards.length > 0 ? deal.trelloCards.map(card => {
        return 'CARD'
      }) : (
        <p>There are no trello cards assigned yet.</p>
      )}

      <h2 className="text-2xl font-bold underline">Trello Boards</h2>
      <ul>
        {boards.length > 0 ? boards.map(({ id, name }) => {
          return (
            <li key={id}>
              {name}
              <button onClick={() => getBoardListsAndCards(id)}>Get Lists</button>
            </li>
          )
        }) : (
          <p>No Trello boards detected.</p>
        )}
      </ul>
    </>
  )
}

export default TrelloCardPicker