import React from "react";
import NCCLogo from "../assets/NCCPoolPhoto.jpg";

export default function PoolCard({
    name, 
    manager, 
    numGuards
  }){
    return(
        <div className="pool-card">
          <div className="pool-card-heading">
            <h1>Pool: {name}</h1>
            <h2>Current Manager: {manager}</h2>
          </div>
          <div className="pool-card-details-container">
            <p>Guards: {numGuards}</p>
            <img src={NCCLogo} alt="Photo of NCC Pool" width="400" height="auto"/>
          </div>
        </div>
    );
}