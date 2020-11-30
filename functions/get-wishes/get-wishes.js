const fetch = require('node-fetch')

const WISH_LIST_ID = 'appEwpq4AhqB4Bqk2'

exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${WISH_LIST_ID}/Wishes?api_key=${
        process.env.AIRTABLE_KEY
      }`,
      {
        headers: { Accept: 'application/json' },
      }
    )
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: { message: response.statusText } }),
      }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          wishes: data.records
            .map(r => r.fields)
            .filter(wish => !wish.gotten && !wish.hidden)
            .sort((a, b) => {
              if (a.category < b.category) {
                return -1
              }
              if (a.category > b.category) {
                return 1
              }
              return 0
            }),
        },
      }),
    }
  } catch (error) {
    console.log(error) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ error }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
