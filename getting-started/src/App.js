import React, { useState } from 'react';
import styleClasses from './App.css';

// import Radium, { StyleRoot } from "radium"
import styled from "styled-components"

import Validator from "./Validator/Validator"
import CharComponent from "./CharComponent/CharComponent"

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

    classes.push(styleClasses.red)

  }

  if (text.length >= 3) {

    classes.push(styleClasses.bold)

  }

  const button = {

    backgroundColor: buttonClicked ? "green" : "white",

    // ":hover": {

    //   backgroundColor: buttonClicked ? "lightgreen" : "grey",
    //   fontWeight: "900"

    // },


  }

  const StyledDiv = styled.div`

  padding:100px
  
  `

  return (


    // <div>

    <StyledDiv>

      < input type="text" onChange={(text) => updateText(text)} value={text} />

      <p className={classes.join(" ")}>{text}</p>

      <Validator textLength={text.length} />

      {text.split("").map(item => <CharComponent char={item} onClick={() => removeFromArray(item)} />)}

      <button style={button} onClick={() => setButtonClicked(!buttonClicked)}>I'm a button</button>

      <p style={styleClasses.red}>Blue text</p>
      
    </StyledDiv>

    // </div>


  )

}



export default App;
