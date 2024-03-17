import React, { useState } from 'react'

const App = () => {

  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-4 py-2 rounded-3xl '>

          {/* onclick can take only a function which can be handleClick but we can't call the function there to pass any parameter there like handleClick('red) but here as we have to pass the color as parameter to the setColor that's why here we use a callback function which is technically a function and in that function we can pass the color to setColor which is itself a function*/}
          <button onClick={()=>{setColor('red')}} 
          className='outline-none px-5 py-1.5 bg-red-600 rounded-xl text-white shadow-lg'>Red</button>

          <button onClick={()=>{setColor('green')}}
          className='outline-none px-5 py-1.5 bg-green-600 rounded-xl text-white shadow-lg'>Green</button>

          <button onClick={()=>{setColor('blue')}} 
          className='outline-none px-5 py-1.5 bg-blue-600 rounded-xl text-white shadow-lg'>Blue</button>

          <button onClick={()=>{setColor('yellow')}} 
          className='outline-none px-5 py-1.5 bg-yellow-400 rounded-xl text-white shadow-lg'>Yellow</button>

          <button onClick={()=>{setColor('gray')}}
          className='outline-none px-5 py-1.5 bg-gray-400 rounded-xl text-white shadow-lg'>Gray</button>

          <button onClick={()=>{setColor('pink')}}
          className='outline-none px-5 py-1.5 bg-pink-400 rounded-xl text-white shadow-lg'>Pink</button>

          <button onClick={()=>{setColor('purple')}}
          className='outline-none px-5 py-1.5 bg-purple-900 rounded-xl text-white shadow-lg'>Purple</button>
          
        </div>
      </div>
    </div>
  )
}

export default App