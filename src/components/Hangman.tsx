import React from "react";

//draw hangman using CSS
const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "88px",
      right: "-57px",
    }}
  >
    <div
      style={{
        height: "9px",
        width: "2px",
        background: "black",
        position: "absolute",
          top: "30px",
          right: "7px",
        rotate: "-46deg",
      }}
    />
    <div
      style={{
        height: "9px",
        width: "2px",
        background: "black",
        position: "absolute",
          top: "30px",
          right: "7px",
        rotate: "46deg",
      }}
    />
    <div
      style={{
        height: "9px",
        width: "2px",
        background: "black",
        position: "absolute",
        top: "41px",
        right: "28px",
        rotate: "-10deg",
      }}
    />
  </div>
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      rotate: "7deg",
      top: "120px",
      right: "9px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "136px",
      right: "-84px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "134px",
      right: "7px",
      rotate: "-101deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-78px",
      rotate: "69deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "207px",
      right: 17,
      rotate: "-92deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODYPARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
const Hangman = () => {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
      <div
        style={{
          height: "110px",
          width: "5px",
          background: "black",
          position: "absolute",
          top: 0,
          right: "6px",
        }}
      />
    </div>
  );
};

export default Hangman;
