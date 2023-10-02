import axios from "axios"
import './App.css';
import { useState, useEffect,useRef } from "react";

function App()  {

  const [quotes,setQuotes]=useState("")
  const textRef= useRef();

  let colors=["#f5499c","#ae2af5","#f55200","#d90602","#455ed9","#d9004f","#e6cf00"]

  const getQuote =()=>{
    fetch("https://type.fit/api/quotes").then(res=>res.json()).then(data=>{
      let randomNum= Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum])
    })
  }

  useEffect (()=>{
    getQuote()
  },[])

  useEffect(()=>{
    textRef.current.style.color=colors[Math.floor(Math.random() * colors.length )]


  },[quotes])
  
  return (
    <div className="App">
      <div className="quote">
        <p ref={textRef}>"{quotes.text}"</p>
        <p>-{quotes.author}</p>
        <div className="btn-container">
          <button onClick={getQuote} className="btn">Get Quote</button>
        </div>
      </div>
   
    </div>
  )
}

export default App;
