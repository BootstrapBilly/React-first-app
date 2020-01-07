import React, { useState } from 'react';
import "./App.css";

import Radium, { StyleRoot } from "radium"

import Validator from "./Validator/Validator"
import CharComponent from "./CharComponent/CharComponent"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"

const App = () => {

  const [text, setText] = useState("")
  const [buttonClicked, setButtonClicked] = useState(false)

  const updateText = (event) => {

    setText(event.target.value)

  }

  const removeFromArray = char => {

    const textArr = text.split("")

    const filt = textArr.filter(item => item !== char)

    const textStr = filt.join("")

    setText(textStr)

  }

  // let classes = buttonClicked ? "" : "red bold"

  let classes = []

  if (text.length >= 2) {

    classes.push("red")

  }

  if (text.length >= 3) {

    classes.push("bold")

  }

  const button = {

    backgroundColor: buttonClicked ? "green" : "white",

    // ":hover": {

    //   backgroundColor: buttonClicked ? "lightgreen" : "grey",
    //   fontWeight: "900"

    // },


  }


  return (


    // <div>

    <StyleRoot>

      <ErrorBoundary>

        <div>

          < input type="text" onChange={(text) => updateText(text)} value={text} />

          <p className={classes.join(" ")}>{text}</p>

          <Validator textLength={text.length} />

          {text.split("").map(item => <CharComponent char={item} onClick={() => removeFromArray(item)} />)}

          <button style={button} onClick={() => {
            
            throw new Error("Viper")
            // setButtonClicked(!buttonClicked)
            
            }}>I'm a button</button>

        </div>

      </ErrorBoundary>

    </StyleRoot>

    // </div>


  )

}



export default Radium(App);
