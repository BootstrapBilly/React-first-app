import React from 'react';
import Radium from "radium"
import AuthContext from '../../context/auth-content';

const CharComponent = props => {

  const container = {

    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",


    "@media (min-width: 800px)": {

      width: "200px",
      backgroundColor: "yellow"

    }

  }

  return (

    <AuthContext.Consumer>
{(context)=>     <div style={container} onClick={props.onClick}>

        <p>{context.authenticated ? props.char : "No authenticato"}</p>

      </div>}
    </AuthContext.Consumer>
  )

}



export default Radium(CharComponent);
