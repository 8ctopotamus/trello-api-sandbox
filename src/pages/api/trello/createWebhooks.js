async function handler(req, res) {
  try {
    let resp = await fetch(`https://api.trello.com/1/tokens/${process.env.TRELLO_API_TOKEN}/webhooks/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "key": process.env.TRELLO_API_KEY,
        "callbackURL": "https://five-clowns-notice-184-59-0-63.loca.lt/api/trello/webhooks",
        "idModel":"643ece84aac9728a66c5657f",
        "description": "Test Card A Webhook"
      })
    })
    resp = await resp.json()
    console.log(resp)

    res.status(200).json(resp)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export default handler