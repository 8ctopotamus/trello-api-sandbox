async function handler(req, res) {
  console.log(req.body)

  res.status(200).json('test')
}

export default handler