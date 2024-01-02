import React from "react";
import "../styles/home.css";

import UpperHome from "./UpperHome";
import Quotes from "./Quotes";

const Home = () => {
  return (
    <div className="homemain">
     <Quotes/>
      <div className="divpri">
        <UpperHome/>
      </div>
    </div>
  );
};

export default Home;
