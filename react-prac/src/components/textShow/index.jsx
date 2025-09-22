import React, { useState } from 'react'

export const TextShow = () => {
    const [text , setText] = useState('')
  return (
    <div>
        <h1>Text Show </h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder='write something !!!!'/>
        <h3>{text}</h3>
    </div>
  )
}
