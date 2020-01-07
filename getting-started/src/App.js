import React from 'react';
import "./App.css";

import Radium, { StyleRoot } from "radium"

import Screen from "./components/Screen"

const App = () => {


  return (

    <StyleRoot>

      <Screen/>

    </StyleRoot>

  )

}


// class App extends Component {

//   constructor(props){

//     super(props)

//     this.state = {

//       buttonClicked : false

//     }

//   }

//   buttonClickHandler = () => {

//     console.log("clicked")

//     this.setState({buttonClicked : !this.state.buttonClicked})

//   }

  
//   render(){

//     return(

//       <button style={{backgroundColor: this.state.buttonClicked ? "blue" : "red"}} onClick={this.buttonClickHandler}>Click me</button>

//     )

//   }

// }



export default Radium(App);
