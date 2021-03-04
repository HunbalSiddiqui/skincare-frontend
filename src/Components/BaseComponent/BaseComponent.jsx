import React, { useState } from "react";
import BaseComponentLeftNav from "../BaseComponentLeftNav/BaseComponentLeftNav";
import "./BaseComponent.css";
import FullWidthTabs from "../BaseComponentTab/BaseComponentTab";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import * as Scroll from 'react-scroll';
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
  var scroll    = Scroll.animateScroll;
  return (
    <div className="basecomponent-wrapper">
      <div className="basecomponent-container">
        <div className="basecomponent-container-nav">
          <BaseComponentLeftNav />
        </div>
        <div className="basecomponent-container-tabs">
          <FullWidthTabs />
        </div>
        <div className="basecomponent-container-right-nav flex-col">
          <KeyboardArrowUpOutlinedIcon className="pointer" fontSize="large" onClick={()=>{scroll.scrollToTop();}} style={{position: "sticky", bottom: "55vh"}}/>
          <KeyboardArrowDownOutlinedIcon className="pointer" fontSize="large" onClick={()=>{scroll.scrollToBottom();}} style={{position: "sticky", top: "55vh"}}/>
        </div>
        <div className="bg-silver basecomponent-container-content flex">
          {images.map((image, index) => {
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
