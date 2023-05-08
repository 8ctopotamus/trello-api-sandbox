async function handler(req, res) {
  try {
    console.log(req)

    const token = req.url.split('token=')[1]
    if (!token) {
      return res.status(400).send('Token missing')
    }
    const userRequest = await fetch(`https://api.trello.com/1/members/me?key=${process.env.TRELLO_API_KEY}&token=${token}`)
    console.log(userRequest)
    const user = await userRequest.json()
    console.log(user)
    res.status(200).json(user)
  } catch(err) {
    console.log('ERR')
    console.log(err)
    res.status(500).json(err)
  }
}

export default handler