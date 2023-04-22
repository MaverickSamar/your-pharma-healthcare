import React from "react";
import "../../styles/expandable-cards.css";

const ExpandableCards = () => {
  return (
    <div className='bodyof'>
      <div className="option__ex active__ex">
        <div className="shadow__ex"></div>
        <div className="label__ex">
          <div className="icon__ex">
            <span>
              <i class="ri-walk-fill"></i>
            </span>
          </div>
          <div className="info__ex">
            <div className="main__ex">Samarth</div>
            <div className="sub__ex">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCards;
