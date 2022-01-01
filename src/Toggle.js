import React from 'react'

export const Toggle = ({Toggle , toggleTheme}) => {
  
    return (
        <div onClick={toggleTheme}>
            console.log(theme);
            <h1>Hello World!</h1>
        </div>
    )
}
