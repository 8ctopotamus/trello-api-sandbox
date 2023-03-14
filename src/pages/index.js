import Head from 'next/head'
import Link from 'next/link'

export default function Home({ deals = [] }) {
  console.log(deals)
  return (
    <>
      <Head>
        <title>Deals</title>        
      </Head>
      <main className="container mx-auto px-2">
        <h1 className="text-3xl font-bold underline">
          Deals
        </h1>
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
  const response = await fetch(`${process.env.ORIGIN}/api/deals`)
  const deals = await response.json()
  return {
    props: {
      deals
    }
  }
}