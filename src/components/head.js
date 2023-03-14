import Head from 'next/head'

const CustomHead = ({ title = 'Trello API Sandbox' }) => {
  return (
    <Head>
      <meta name="description" content="A trello + nextjs sandbox" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

export default CustomHead