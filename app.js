const express = require('express')

const app = express()

app.get('/', function(req,res,next){
  res.send({ data: 'hello world' })
})

app.use(function(req, res, next){
  res.status(404).send({ error: 'Route not found' })
})


const port = process.env.PORT || 5000

app.listen(port, function(){
  console.log(`Listening`)
})