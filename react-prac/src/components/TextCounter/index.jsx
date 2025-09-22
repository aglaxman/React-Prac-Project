import React, { useEffect, useState } from 'react'

export const TextCounter = () => {
    // const [count , setCount ] = useState(0)
    const [text ,setText] =useState('')
    // useEffect(()=>{
    //     setCount(text ? text.length : null)
    // },[text])
  return (
    <div>
        <h1>TextCounter</h1>
        <input type="text" value={text } onChange={(e)=>setText(e.target.value)} />
        <h3>Count : {text.length} </h3>
    </div>
  )
}
