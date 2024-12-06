import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor]= useState("red")

  return (
   <div className="container border  rounded" style={{backgroundColor:color,height: '100vh', width:'100%'}}>
     <div  className='mt-5 fw-bolder text-light fst-italic text-center' >
      <h1 style={{fontWeight:700}}>Background Color Changing App</h1>
    </div> 
    <div className='flex flex-wrap bg-light mt-5 rounded m-3 text-center'>
      <button type='button' onClick={() => setColor("blue")} className='btn btn-primary pt-2 pb-2 ps-4 pe-4 m-1 rounded-pill'>Blue</button>
      
      <button type='button' onClick={() => setColor("green")} className='btn btn-success pt-2 pb-2 ps-3 pe-3 m-1 rounded-pill'>Green</button>
      <button type='button' onClick={() => setColor("red")} className='btn btn-danger pt-2 pb-2 ps-4 pe-4 m-1 rounded-pill'>Red</button> 
      <button type='button' onClick={() => setColor("yellow")} className='btn btn-warning pt-2 pb-2 ps-3 pe-3 m-1 text-light rounded-pill'>Yellow</button>
      <button type='button' onClick={() => setColor("white")} className='btn btn-light pt-2 pb-2 ps-3 pe-3 m-1 text-dark rounded-pill'>White</button>
      <button type='button' onClick={() => setColor("cyan")} className='btn btn-info pt-2 pb-2 ps-3 pe-3 m-1 text-light rounded-pill'>Cyan</button>
      <button type='button' onClick={() => setColor("gray")} className='btn btn-secondary pt-2 pb-2 ps-3 pe-3 m-1 text-light rounded-pill'>Gray</button>
      <button type='button' onClick={() => setColor("black")} className='btn btn-dark pt-2 pb-2 ps-4 pe-4 m-1 rounded-pill'>Black</button>

    </div>

   </div>
  )
}

export default App
