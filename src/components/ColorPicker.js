import React from 'react'

function ColorPicker(props) {
    return (
        <div>
            <button onClick={ () => props.handleColorClick('purple')}>Purple</button>
            <button onClick={ () => props.handleColorClick('blue')}>Blue</button>
            <button onClick={ () => props.handleColorClick('orange')}>Orange</button>
            <button onClick={ () => props.handleColorClick('red')}>Red</button>
        </div>
    )
}

export default ColorPicker