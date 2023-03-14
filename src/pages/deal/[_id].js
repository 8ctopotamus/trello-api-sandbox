import Head from 'next/head'
import Link from 'next/link'

export default function Deal({ deal, boards }) {
  console.log(boards)
  return !deal ? <p>Loading deal...</p> : (
    <>
      <Head>
        <title>{deal.title}</title>        
      </Head>
      <main className="container mx-auto px-2">
        <h1 className="text-3xl font-bold underline">
          {deal.title}
        </h1>
        <h2>_id: {deal._id}</h2>
        
        <h2>Assigned Trello Cards:</h2>
        {deal.trelloCards.length > 0 ? deal.trelloCards.map(card => {
          return 'CARD'
        }) : (
          <p>There are no trello cards assigned yet.</p>
        )}
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.ORIGIN}/api/deal/${context.params._id}`)
  const { deal, boards } = await response.json()
  return {
    props: {
      deal,
      boards,
    }
  }
}