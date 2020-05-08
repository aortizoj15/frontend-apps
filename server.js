const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/mvp', (req, res) => {
  res.sendFile(path.join(__dirname, 'mvp.html'))
})
app.get('/smart-watch', (req, res) => {
  res.sendFile(path.join(__dirname, '/projects/smart-watch.html'))
})

app.listen(3011, () => {
  console.log('listening on port 3011')
})
