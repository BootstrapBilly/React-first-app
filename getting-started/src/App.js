import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [text, setText] = useState("....")

  return (

    <div> 

      <p>
        I prefer {text} 
      </p>

    <button onClick={()=> setText("Hooks!")}>
      ?
    </button>

    </div>

  )
}


export default App;
