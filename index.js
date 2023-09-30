require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const brand="Dnyaneshwari"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dnyaneshwari', (req, res) => {
    res.send(`welcome to our bookstore ${brand}`)
})

app.get('/login', (req, res) => { 
    res.send(`<h1>Please login at ${brand} Store</h1>`)
})

app.get('/booklist', (req, res) => { 
    res.send(`<h2>List of books @${brand}</h2>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})