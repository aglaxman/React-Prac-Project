import React, { useEffect, useState } from 'react'
let data = ['red','yellow','green']
export const TrafficLight = () => {
    
    const [lights , setLights] = useState('RED')
    const [count , setCount] = useState(0)
    
    useEffect(()=>{
        setLights(data[count])  
    },[count])

    const handleCount = ()=>{
        setCount(prev=>(prev+1) % data.length)
    

     }
  return (
    <div>
        <h1>TrafficLight</h1>
        <button>{lights}</button><br /><br />
        <button onClick={handleCount}>Click To Change Lights</button>

    </div>
  )
}
