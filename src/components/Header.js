import React, { useState } from "react";


function Header(isDarkMode , onDarkModeClick){
    return(
        <header>
            <h2> shope center</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? 'Dark' : 'ligth'} Mode
            </button>
        </header>
    )
}


export default Header; 