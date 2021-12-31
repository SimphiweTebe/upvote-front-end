import React from 'react'
import './styles.scss'

function Loading() {
    return (
        <div className='spinner__wrapper'>
            <h3>Loading...</h3>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading
