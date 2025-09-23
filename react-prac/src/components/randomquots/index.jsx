import React, { useState } from 'react'


const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
  { text: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
  { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
  { text: "Great things never come from comfort zones.", author: "Anonymous" },
  { text: "Dream bigger. Do bigger.", author: "Anonymous" }
];
export const Quotes = () => {
  const [quote , setQuote] = useState({
    'text' : '',
    author : ''
  })
  const [index , setIndex] = useState(-1)




  const handleRandonQuotes = ()=>{
     let randomInt
    const randonFunction = ()=>{
        do {
            randomInt = Math.floor(Math.random() * quotes.length)
        } while (randomInt == index);
        return randomInt; 
    }

    let intval =  randonFunction()
    setIndex(intval)
    setQuote(quotes[intval])
  }
  return (
    <div>
        <h1>Random Quotes Generetor</h1>
        <h2>Quotes : {quote.text}</h2>
        <h3>Author : {quote.author}</h3>
        <button onClick={handleRandonQuotes}>Click to Generate </button>
    </div>

  )
}
