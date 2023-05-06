import React from "react";
import "./About.css";
import image from "./images/0_nleHfywdU50Lp7uS.png"

function About() {
    return (
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1>Pepe forged by the diamond hand community</h1>
            <p>Launched on Arbitrum, $DP is brrrriiinting the worlds most recognisable meme. Diamond Pepe is launched stealth with no pre-sale, no taxes, LP burned and contract renounced. The culture has chosen pepe as the king of kings and we are here to bring Diamond Pepe to the forefront of the people on Arbitrum. Memetic autism is here with $DP.</p>
            <div className="contract-address">
              <div className="contract-address-label">Contract Address:</div>
              <div className="contract-address-text">0x5F0FA81f587acea6848e72f4De224eB26C9a5e19</div>
            </div>
          </div>
          <div className="about-image">
            <img src={image} alt="placeholder" />
          </div>
        </div>
      </div>
    );
  }
  
  export default About;