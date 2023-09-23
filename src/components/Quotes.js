import React, { useEffect, useState } from "react";
import "../styles/quotes.css";
import { quoteArray } from "../calls/Animedb";

const Quotes = () => {
  const [displayQuote, setDisplayQuote] = useState("");
  const [displayAnime,setDisplayAnime]=useState('');
  const [speaker,setSpeaker]=useState('');
  const [imgi,setImgi]=useState('');
  useEffect(() => {
    const index=Math.floor(Math.random()*quoteArray.length);
    setDisplayQuote(quoteArray[index].quo);
    setDisplayAnime(quoteArray[index].anime);
    setSpeaker(quoteArray[index].said);
    setImgi(quoteArray[index].url);
  },[]);
  return (
    <div className="quopri">
      <h2>Welcome</h2>
      <h4>
       {displayQuote} {speaker} ({displayAnime})
      </h4>
      <img src={imgi} alt="anohana" className="homeimg" />
    </div>
  );
};

export default Quotes;
