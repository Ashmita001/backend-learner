// const express=require('express');
import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send('Server is ready')  ;  
});

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Math Joke",
          content: "Why was the math book sad? Because it had too many problems."
        },
        {
          id: 2,
          title: "Programming Joke",
          content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
          id: 3,
          title: "Coffee Joke",
          content: "How do you organize a space party? You planet!"
        },
        {
          id: 4,
          title: "Dad Joke",
          content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
          id: 5,
          title: "Animal Joke",
          content: "What do you call a bear with no teeth? A gummy bear!"
        }
      ];
      res.send(jokes);
    
});

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});

// result=> errors