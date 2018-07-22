import React from "react";

import "./Hero.scss";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__content">
        <div className="Hero__opinion-box">
          <div className="Hero__opinion-box-content" />
          <div className="Hero__opinion-box-buttons" />
        </div>
      </div>
      <div className="Hero__counter">Counter</div>
    </div>
  );
}
