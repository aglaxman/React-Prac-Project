import React, { useState } from 'react'

export const PasswordVisible = () => {
    const [text , setText] = useState('')
    const [showPassword , setShowPassword ]  = useState(true)
    const handlePasswordBtn = ()=>{
        setShowPassword(prev => !prev)
    }
  return (
    <div>
        <h1>PasswordVisible</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <h1>{showPassword ? text : '*'.repeat(text.length)}</h1>
        <button onClick={handlePasswordBtn}>{!showPassword ? 'Show password' : 'Hide Password'}</button>
    </div>
  )
}
