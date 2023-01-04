import "./AboutContantStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../Assets/react1.jpg";
import React2 from "../Assets/react2.webp";

const AboutContant = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>Im a react font-end developer. I create responsive secure website for my clients.</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContant