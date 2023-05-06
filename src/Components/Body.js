import React from 'react';
import "./Body.css";
import About from "./About";
import BodyImages from "./BodyImages";

const Body = () => {
  return (
    <div>
      <h1></h1>
        < About/>
        < BodyImages />
        <div class="background-image"/>
    </div>
  );
};

export default Body;