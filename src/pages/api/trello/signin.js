async function handler(req, res) {
  try {
    res.redirect(`https://api.trello.com/1/authorize?key=${process.env.TRELLO_API_KEY}&callback_method=fragment&scope=read&expiration=1hour&name=sandbox&response_type=token&return_url=${encodeURIComponent('https://zylo.loca.lt/api/trello/signin-callback')}`)
  } catch(err) {
    console.log('ERR')
    console.log(err)
    res.status(500).json(err)
  }
}

export default handler