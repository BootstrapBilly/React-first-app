import React from 'react';

const CharComponent = props => {

    const container = {

        display:"inline-block",
        padding:"16px",
        textAlign:"center",
        margin: "16px",
        border: "1px solid black"

    }

  return (

    <div style={container} onClick={props.onClick}>

        <p>{props.char}</p>

    </div>

  )

}



export default CharComponent;
