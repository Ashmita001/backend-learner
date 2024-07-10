require('dotenv').config()
const express = require('express')
// similar to import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('you are here')
})
//url
app.get('/login',(req,res)=>{
    res.send('login page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//changed to
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })

