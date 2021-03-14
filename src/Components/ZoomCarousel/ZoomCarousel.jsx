import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const images = [
    "https://source.unsplash.com/random/$count=1,orientation=landscape",
    "https://source.unsplash.com/random/$count=2,orientation=landscape",
    "https://source.unsplash.com/random/$count=3,orientation=landscape",
    "https://source.unsplash.com/random/$count=5,orientation=landscape"
];

export default function Slideshow() {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%",height:"400px"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}