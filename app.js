const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/find-space-ship', async (req, res) => {
  const result = await axios.get('https://api.spacexdata.com/v4/launches')
  
  res.send(JSON.stringify(result.data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})