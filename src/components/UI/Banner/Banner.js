import React from 'react'
import './Banner.css'

const banner = props => {
    return (
        <div className={props.clase}>
            {props.children}
        </div>
    )
}

export default banner