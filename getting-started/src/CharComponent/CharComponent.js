import React from 'react';
import Radium from "radium"

const CharComponent = props => {

    const container = {

        display:"inline-block",
        padding:"16px",
        textAlign:"center",
        margin: "16px",
        border: "1px solid black",

        
    "@media (min-width: 800px)": {

        width: "200px",
        backgroundColor: "yellow"
  
      }

    }

  return (

    <div style={container} onClick={props.onClick}>

        <p>{props.char}</p>

    </div>

  )

}



export default Radium(CharComponent);
