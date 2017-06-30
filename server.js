const express = require('express'),
      bodyParser = require('body-parser'),
      port = 9999
const app = express()

app.use(bodyParser.json())

var statuses = [
    {name: 'Billy', status: 'Wow today is boring!'},
    {name: 'Jonas', status: 'I love pizza.'},
    {name: 'Barack', status: 'best vacation ever lol!'}
  ]

app.get('/api/getstatus', (request, response) => {
  response.status(200).send(statuses)
})



app.listen(port, console.log(`Listening on ${port}`))