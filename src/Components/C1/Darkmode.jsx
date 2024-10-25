import React, {useState} from 'react';

function Darkmode() {
    

  return (

    <div className="tdm">
        <span className="dark-mode-lable">Dark mode</span>
        <label htmlFor="darkmode-switch" className="switch">
            <input type="checkbox" id="darkmode-switch" onChange="ToggleDarkMode()" />
            <span className="slider round"></span>
        </label>
        
    </div>

  )
}

export default Darkmode