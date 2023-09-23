import React from "react";
import "../styles/home.css";

import Quotes from "./Quotes";
const Home = () => {
  return (
    <div className="homemain">
     <Quotes/>
      <div className="divpri">
        <div style={{ backgroundColor: "blue", height: "30px" }}></div>
        <div style={{ backgroundColor: "red", height: "50px" }}></div>
      </div>
    </div>
  );
};

export default Home;
