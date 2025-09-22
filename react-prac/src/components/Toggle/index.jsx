import React, { useState } from 'react'

export const Toggle = () => {
    const [toggle , setToggle ] = useState(true)
    const handleToggle =()=>{
        setToggle((prev)=>!prev)
    }
  return (
    <div>   
            <h1>Toogle button</h1>
            <br />
            <button onClick={handleToggle}>{ toggle ? 'ON' : 'OFF'}</button>
    </div>
  )
}
