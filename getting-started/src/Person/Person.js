import React from "react"
import "../App.css"

const Person = props => {

    return (

        <div>

            <p>{props.name}</p>
            <p>{props.age}</p>

        </div>

    )

}

export default Person