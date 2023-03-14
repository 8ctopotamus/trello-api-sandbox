import Head from 'next/head'
import Link from 'next/link'

export default function Deal({ deal = null }) {
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
        
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.ORIGIN}/api/deal/${context.params._id}`)
  const deal = await response.json()
  return {
    props: {
      deal,
    }
  }
}