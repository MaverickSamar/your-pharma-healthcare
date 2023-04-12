import React from "react";
import "../../styles/expandable-cards.css";

const ExpandableCards = () => {
  return (
    <div>
      <div class="option active">
        <div class="shadow"></div>
        <div class="label">
          <div class="icon">
            <i class="fas fa-walking"></i>
          </div>
          <div class="info">
            <div class="main">Samarth</div>
            <div class="sub">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCards;
