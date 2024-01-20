import React from "react";
import NCCLogo from "../assets/NCCPoolPhoto.jpg";

export default function GetPoolCard({name, manager, numGuards}){
    return(
        <div>
          <div>
            <h1>Pool: {name}</h1>
            <h2>Current Manager: {manager}</h2>
          </div>
          <div>
            <p>Guards: {numGuards}</p>
            <img src={NCCLogo} alt="Photo of NCC Pool" width="400" height="auto"/>
          </div>
        </div>
    );
}