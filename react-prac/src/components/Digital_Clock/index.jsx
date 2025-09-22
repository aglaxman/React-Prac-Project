import React, { useEffect, useState } from 'react'

export const DigitalClock = () => {

    const [dateTime , setDateTime] = useState('')

    useEffect(() => {
        
        
       const update = ()=>{
         const date = new Date()
         const fomatted = date.toLocaleString()
         setDateTime(fomatted)
       }
       update()
       const interval = setInterval(() => {
        update()
       }, 1000);

       return ()=>clearInterval(interval)


        
    }, [])
    
  return (
    <div>
        <h1>Digital clocck</h1>
        <h3>Date : {dateTime}</h3>

    </div>
  )
}
