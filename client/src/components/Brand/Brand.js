import React from "react";
import "react-bootstrap";
import "./brand.css"


// get our fontawesome imports
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Brand() {
  return (
  <nav className="nav nav-bar">
   
    <span>
     <h1 className="brand text-danger">M <FontAwesomeIcon className="icon" icon={faFire}/> tcht</h1>
     </span>

   </nav>
   );
} 

export default Brand;
