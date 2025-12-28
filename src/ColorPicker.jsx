import React, {useState} from 'react'

function ColorPicker() {

    const [color, setColor] = useState('#FFFFFF')

    const body = document.querySelector('body')
    body.style.backgroundImage = `radial-gradient(white, ${color})`

    function handleColorChange(e) {
        const eventValue = e.target.value
        setColor(eventValue)

        body.style.backgroundImage = `radial-gradient(white, ${color})`
    }

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className='color-picker' style={{backgroundColor: color}}>
                <p>Selected Color:<br/>{color}</p>
            </div>
            <label for='color-selector'>Select a color:</label>
            <input id='color-selector' type='color' onChange={(e) => handleColorChange(e)} value={color} />
        </div>
    )
}
export default ColorPicker