import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const Counter = () => {
  const [count , setCounter] = useState(0)
  return (
    <div className='container'>
        <h1 style={{margin:'auto',}} > {count} </h1>
        <button type="button" class="btn btn-outline-primary"
        onClick={()=>setCounter((prev)=>(prev+1))}
        >Increment</button>
        <button type="button" class="btn btn-outline-danger"
        onClick={()=>setCounter(0)}
        >Reset</button>
        <button type="button" class="btn btn-outline-warning"
        onClick={()=>setCounter((prev)=>(prev-1))}
        >Decrement</button>
    </div>
  )
}
