import React from 'react'
import './Css/Button.css'




export default function Button({btnColor, btnState, btnText, onClickFunction}) {
    return (
        <div>
            <button className={btnColor} disabled={btnState} onClick={onClickFunction}>{btnText}</button>
        </div>
    )
}
