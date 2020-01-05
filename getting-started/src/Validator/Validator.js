import React from 'react';

const Validator = props => {

  return (

    <div>

     {props.textLength < 5 ? <p>Too short</p> : <p>Okay</p>}

    </div>

  )

}



export default Validator;
