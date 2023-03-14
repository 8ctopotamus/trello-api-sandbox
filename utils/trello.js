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
  return await talkToTrello(`https://api.trello.com/1/members/me/boards`)
}