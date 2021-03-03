import React, { useState } from "react";
import BaseComponentLeftNav from "../BaseComponentLeftNav/BaseComponentLeftNav";
import "./BaseComponent.css";
import FullWidthTabs from "../BaseComponentTab/BaseComponentTab";
import CardSm from "../CardSm/CardSm";
import one from "../../Assets/Images/one.jpg";
import two from "../../Assets/Images/two.jpg";
import three from "../../Assets/Images/three.jpg";
import four from "../../Assets/Images/four.jpg";
import five from "../../Assets/Images/five.jpg";
import six from "../../Assets/Images/six.jpg";
import seven from "../../Assets/Images/seven.jpg";
import eight from "../../Assets/Images/eight.jpg";
import nine from "../../Assets/Images/nine.jpg";
import ten from "../../Assets/Images/ten.jpg";
function BaseComponent() {
  const [images, setImages] = useState([
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
  ]);
  let count = 0;
  return (
    <div className="basecomponent-wrapper">
      <div className="basecomponent-container">
        <div className="basecomponent-container-nav">
          <BaseComponentLeftNav />
        </div>
        <div className="basecomponent-container-tabs">
          <FullWidthTabs />
        </div>
        <div className="basecomponent-container-right-nav flex-col-end"></div>
        <div className="bg-silver basecomponent-container-content flex">
          {images.map((image, index) => {
            // console.log(count%2===0)
            count++;
            return count % 2 === 0 ? (
              <CardSm image={image} key={index} type={"lg"} />
            ) : (
              <CardSm image={image} key={index} type={"sm"} />
            );
          })}
        </div>
        <div className="basecomponent-container-footer flex">
          All rights reserved. Made with love and passion
        </div>
      </div>
    </div>
  );
}

export default BaseComponent;
