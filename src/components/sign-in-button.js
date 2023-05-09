import Link from "next/link"
import { useEffect, useState } from "react"

const TrelloSignin = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = window.location.hash.split('=')[1]
    if (token) {
      fetchTrelloUser(token)
    }
  }, [])

  const fetchTrelloUser = async (token) => {
    const response = await fetch(`https://api.trello.com/1/members/me?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${token}`)
    const user = await response.json()
    setUser(user)
  }

  return user ? (
    <pre>{JSON.stringify(user, null, 2)}</pre>
  ) : (
    <Link href={`https://api.trello.com/1/authorize?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&callback_method=fragment&scope=read&expiration=1hour&name=sandbox&response_type=token&return_url=${encodeURIComponent('https://zylo.loca.lt')}`}>
      <button className="btn btn-primary">Sign In</button>
    </Link>
  )
}

export default TrelloSignin