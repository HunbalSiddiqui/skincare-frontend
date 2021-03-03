import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { emphasize } from "@material-ui/core/styles/colorManipulator";

function CardSm(props) {
  const useStyles = makeStyles(() => ({
    root: {
      width: "20rem",
      height: props.type === "sm" ? "20rem" : "25rem",
      // backgroundColor: "pink",
      borderRadius: "25px 25px",
      cursor: "pointer",
      transition: "0.5s ease-in-out",
      transformStyle: "preserve-3d",
      // boxShadow:"0 4px 8px 0 rgba(0,0,0,1)"
      // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      // "&:hover, &:focus":{
      //     transform: "rotateY(180deg)"
      // }
    },
  }));
  const [rotate, setrotate] = useState(false);
  const cardRef = useRef(null);
  useEffect(() => {
    if (rotate) {
      cardRef.current.style.background = `url(${props.image})`;
      cardRef.current.style.backgroundSize = "100% 100%,cover";
      // cardRef.current.style.background = "pink"
      cardRef.current.style.transform = "rotateY(180deg)";
    } else {
      cardRef.current.style.background = `url(${props.image})`;
      cardRef.current.style.backgroundSize = "100% 100%,cover";
      cardRef.current.style.transform = "rotateY(0deg)";
    }

    return () => {};
  }, [rotate]);
  const handleFlip = (e) => {
    e.target.style.backgroundColor = "green";
    e.target.style.transofrm = "green";
  };
  const classes = useStyles();
  return (
    <div
      ref={cardRef}
      className={classes.root}
      onClick={(e) => {
        setrotate(!rotate);
      }}
    ></div>
  );
}

export default CardSm;
