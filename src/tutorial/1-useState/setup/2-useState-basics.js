import React, { useState } from "react";

const UseStateBasics = () => {
  const [bob, setBob] = useState("random title");

  const handleClick = () => {
    if (bob === "random title") {
      setBob("CHANGED VALUE");
    } else {
      setBob("random title");
    }
  };
  return (
    <>
      <h1>{bob}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
