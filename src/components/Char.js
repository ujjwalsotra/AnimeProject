import React, { useEffect, useState } from "react";
import "../styles/char.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Char = () => {
  const [urls, setUrls] = useState("");
  const [infield, setInfield] = useState("");
  const newInfield = infield.charAt(0).toUpperCase();
  const namestring=newInfield+infield.slice(1);
  const handleClick = () => {
    
    console.log(namestring)
    const fetchanimedata = async () => {
      try {
        const mydata = await axios.get(`https://waifu.it/api/${namestring}`, {
          headers: {
            Authorization:
              process.env.REACT_APP_ANIME_API_KEY,
          },
        });
        console.log(mydata.data);
        setUrls(mydata.data.url);
      } catch (e) {
        alert("Try some other theme pls");
      }
    };
    fetchanimedata();
  };
  return (
    <div className="charmain">
      <div>
        <img src={urls} />
      </div>
      <div>
        <input
          type="search"
          placeholder="search gif"
          value={infield}
          onChange={(e) => {
            setInfield(e.target.value);
          }}
        />
        <button className="navbutton" onClick={handleClick} type="button">
          Bankai
        </button>
      </div>
    </div>
  );
};

export default Char;
