import React, { useEffect } from 'react';

const Validator = props => {

  useEffect(()=> {

    console.log("I've been rebuilt")
  })
  return (

    <div>

     {props.textLength < 5 ? <p>Too short</p> : <p>Okay</p>}

    </div>

  )

}



export default React.memo(Validator);
