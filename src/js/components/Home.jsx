import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
  const [active, setActive] = useState("red");
  
  const toggleLight = () => {
	if (active === "red") setActive ("green");
	else if (active === "green") setActive ("yellow");
	else setActive ("red");
 };

  return (
    <div className="traffic-container">
      <div className="traffic-body">
        <div
          className={`light red ${active === "red" ? "active glow-red" : ""}`}
          onClick={() => setActive("red")}
        ></div>

        <div
          className={`light yellow ${active === "yellow" ? "active glow-yellow " : ""}`}
          onClick={() => setActive("yellow")}
        ></div>

        <div
          className={`light green ${active === "green" ? "active glow-green" : ""}`}
          onClick={() => setActive("green")}
        ></div>
      </div>
	  <button className="toggle-btn gp-2" onClick={toggleLight}>Cambiar color</button>
    </div>
  );
};

export default Home;
