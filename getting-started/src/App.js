import React, { useState } from 'react';
import './App.css';

import Validator from "./Validator/Validator"
import CharComponent from "./CharComponent/CharComponent"

const App = () => {

  const [text, setText] = useState("")

  const updateText = (event) => {

    setText(event.target.value)

  }

  const removeFromArray = char => {

    const textArr = text.split("")

    const filt = textArr.filter(item => item !== char)

    const textStr = filt.join("")

    setText(textStr)

  }

  return (

    <div>

      <input type="text" onChange={(text) => updateText(text)} value={text} />

      <p>{text}</p>

      <Validator textLength={text.length} />

      {text.split("").map(item => <CharComponent char={item} onClick={()=> removeFromArray(item)} />)}

    </div>

  )

}



export default App;
