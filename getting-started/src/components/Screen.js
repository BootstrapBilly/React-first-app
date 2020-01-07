import React, { useState, useEffect, useRef, useContext } from 'react';
import "../App.css"

import Radium from "radium"

import Validator from "./Validator/Validator"
import CharComponent from "./CharComponent/CharComponent"
import Auxil from "../../src/HOC/Auxil"
import AuthContext from "../context/auth-content"

const App = () => {

    const authContext = useContext(AuthContext)

    const input = useRef(null)

    const [text, setText] = useState("")
    const [authenticated, setAuthenticated] = useState(false)
    const [inputVisible, setInputVisible] = useState(true)
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

        ":hover": {

            backgroundColor: buttonClicked ? "lightgreen" : "grey",
            fontWeight: "900"

        },


    }

    const loginHandler = () => {

        setAuthenticated(true)
    }

    useEffect(() => {

        console.log("[screen] useeffect")

    })

    const container = {

        backgroundColor: "grey",
        width: "50%",

    }

    return (

        <Auxil>

            <div style={container}>

                <input type="text" onChange={(text) => updateText(text)} value={text} ref={input} />

                <p className={classes.join(" ")}>{text}</p>

                {inputVisible ? <Validator textLength={text.length} /> : null}

                {text.split("").map(item => <CharComponent char={item} onClick={() => removeFromArray(item)} />)}

                <button key={"b1"} style={button} onClick={() => setButtonClicked(!buttonClicked)}>I'm a button</button>

                <button key={"b2"} style={button} onClick={() => setInputVisible(!inputVisible)}>Remove validator</button>

                <button key={"b3"} style={button} onClick={() => input.current.focus()}>Focus input</button>

                <AuthContext.Provider value={{ authenticated: authenticated, login: ()=> loginHandler() }}>

                    <AuthContext.Consumer>

                        {(context) => <button key={"b4"} style={button} onClick={() => context.loginHandler}>Log in</button>}

                    </AuthContext.Consumer>


                    <p>Everyting log arf</p>

                </AuthContext.Provider>

            </div>

            <p>P</p>

        </Auxil>
    )

}



export default Radium(App);
