import React from 'react'
import './Css/Slider.css'


export default function SliderCustom({onChangeFunction}) {
    return (
        <div>
            <input type="range" className="slider" min="1" max="15" step="1" onChange={event => onChangeFunction(event.target.value)} defaultValue="4"/>
        </div>
    )
}
