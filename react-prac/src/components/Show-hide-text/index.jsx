import React, { useState } from 'react'

export const Show = () => {
    const [clicked , setClicked ] = useState(false)
    const handleClick = ()=>{
        setClicked(prev => !prev)
    }
  return (
    <div>
        <h1>Show - Hide text</h1>

        <button onClick={handleClick}>{!clicked ? 'Show Data ' : 'Hide Data' }</button>

        {clicked && (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ab, labore tempore saepe vitae quos vel sequi nisi voluptas quia excepturi reiciendis, facere et vero ipsum nihil expedita magnam sapiente.</p>)}

    </div>
  )
}
