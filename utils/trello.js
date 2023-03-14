const API_URL = 'https://api.trello.com'

const talkToTrello = async (url, {
  method = 'GET',
  headers = {},
  body,
  responseType = 'json',
} = {
  method:'GET',
  headers: {},
  body: null,
  responseType:'json',
}) => {
  let authParams = [
    `key=${process.env.TRELLO_API_KEY}`,
    `token=${process.env.TRELLO_API_TOKEN}`
  ]

  let finalURL 

  if (url.includes('?')) {
    finalURL = `${url}&${authParams.join('&')}`
  } else {
    const [keyParam, ...restOfParams] = authParams
    finalURL = `${url}?${keyParam}&${restOfParams.join('&')}`
  }

  const response = await fetch(finalURL, { method, headers, body })
  return await response[responseType]()
}

export const getBoards = async () => {
  return await talkToTrello(`${API_URL}/1/members/me/boards?fields=name,url`)
}

export const getBoardListsAndCards = async boardId => {
  const results = []
    
  let lists = await talkToTrello(`${API_URL}/1/boards/${boardId}/lists`)

  if (lists) {
    for (const list of lists) {
      let cards = await talkToTrello(`${API_URL}/1/lists/${list.id}/cards`)
      results.push({ ...list, cards })
    }  
  }

  return results
}