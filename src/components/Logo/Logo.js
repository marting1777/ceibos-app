import React from 'react'
import Aux from '../../HOC/Auxiliar/Auxiliar'

const logo = props => {
    return (
        <Aux>
            <img src={props.imageUrl} alt={props.imageTitle}/>
        </Aux>
    )
}

export default logo