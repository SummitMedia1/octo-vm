import React from "react";
import "../../pages/Videos/App.css";
console.log("running client/src/components/Jumbotron/Jumbotron.js");
const Jumbotron = ({ children }) =>
  <div style={{ height: 60, padding: 0,clear: 'both' }} className="jumbotron">
    {children}
  </div>;
export default Jumbotron;
