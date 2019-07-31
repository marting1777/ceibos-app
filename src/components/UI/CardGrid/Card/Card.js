import React from 'react'
import './Card.css'

const card = props => {
    return (
        <div className="Card">
            <h1>{props.text}</h1>
        </div>
    )
}

export default card