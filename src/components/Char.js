import React, { useEffect, useState } from "react";
import "../styles/char.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Char = () => {
  const location = useLocation();
 const invalue=location.state.name
  const [urls, setUrls] = useState("");
  useEffect(() => {
    const fetchanimedata = async () => {
      try {
        const mydata = await axios.get(`https://waifu.it/api/${invalue}`, {
          headers: {
            Authorization:
              "NzExMjc2NDY0MDE1NjcxMzMw.MTY5NDk4MzAwNQ--.eab3f4d795e",
          },
        });
        setUrls(mydata.data.url);
      } catch (e) {
        alert("Try some other theme pls");
      }
    };
    fetchanimedata();
  }, [invalue]);
  return (
    <div className="charmain">
      <div>
      <img src={urls} />
      </div>
    </div>
  );
};

export default Char;
