import React from "react";
import "./BodyImages.css";

function BodyImages() {
  return (
<div class="body-images-container">
  <div class="body-images-phase with-background-image">
    <div class="body-images-phase-background-image background-image-1"></div>
    <div class="body-images-phase-title"></div>
    <div class="body-images-gallery">
      <div class="body-images-item">
        <div class="body-images-item-content">
          <h3 class="body-images-item-title">Phase Uno</h3>
          <ul>
            <li>Launch the $DP</li>
            <li>DexScreener Application</li>
            <li>100+ $DP Holders</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="body-images-phase">
    <div class="body-images-phase-title"></div>
    <div class="body-images-gallery">
      <div class="body-images-item">
        <div class="body-images-item-content">
          <h3 class="body-images-item-title">Phase Dos</h3>
          <ul>
            <li>CMC & CoinGecko</li>
            <li>Create gamefied Dopex & GMX betting leaderboard</li>
            <li>1000+ Diamond handers</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="body-images-phase with-background-image">
    <div class="body-images-phase-background-image background-image-2"></div>
    <div class="body-images-phase-title"></div>
    <div class="body-images-gallery">
      <div class="body-images-item">
        <div class="body-images-item-content">
          <h3 class="body-images-item-title">Phase Tre</h3>
          <ul>
            <li>Launch Dopex & GMX Betting DaPP</li>
            <li>5000+ Holders</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  ); 
}

export default BodyImages;