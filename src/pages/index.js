import CustomHead from "@/components/head"
import TrelloSignin from "@/components/sign-in-button"
import Link from 'next/link'

export default function Home({ deals = [] }) {
  return (
    <>
      <CustomHead />
      <main className="prose container mx-auto px-2">
        
        <TrelloSignin />

        <h1>Trello API Sandbox</h1>
        <h2>Deals</h2>
        <ul>
          {deals.map(d => (
            <li key={d._id}>
              <Link href={`/deal/${d._id}`}>
                {d.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/deals`)
  const deals = await response.json()
  return {
    props: {
      deals
    }
  }
}