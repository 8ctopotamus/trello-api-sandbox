import CustomHead from "@/components/head"
import TrelloCardPicker from "@/components/trello/cardPicker"

export default function Deal({ deal, boards = [] }) {
  return !deal ? <p>Loading deal...</p> : (
    <>
      <CustomHead title={deal.title} />
      
      <main className="container mx-auto px-2">
        <h1 className="text-4xl font-bold mb-4 underline">
          {deal.title} | ({deal._id})
        </h1>        
        
        <TrelloCardPicker 
          deal={deal}
          boards={boards}
        />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/deal/${context.params._id}`)
  const { deal, boards } = await response.json()
  return {
    props: {
      deal,
      boards,
    }
  }
}