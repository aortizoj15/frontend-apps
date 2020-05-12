const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/smart-watch', (req, res) => {
  res.sendFile(path.join(__dirname, '/projects/smart-watch.html'))
})

app.get('/stars', (req, res) => {
  res.sendFile(path.join(__dirname, '/projects/stars.html'))
})

app.get('/google-fair', (req, res) => {
  res.sendFile(path.join(__dirname, '/projects/google-fair.html'))
})

app.get('/lights-off', (req, res) => {
  res.sendFile(path.join(__dirname, '/projects/lights-off.html'))
})

app.get('/kanban', (req, res) => {
  res.sendFile(path.join(__dirname, '/projects/kanban-board.html'))
})

app.get('/select', (req, res) => {
  res.sendFile(path.join(__dirname, '/projects/select.html'))
})

app.get('/minesweeper', (req, res) => {
  res.sendFile(path.join(__dirname, '/projects/minesweeper.html'))
})

app.listen(3011, () => {
  console.log('listening on port 3011')
})
