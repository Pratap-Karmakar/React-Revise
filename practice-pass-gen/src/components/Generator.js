import React, { useCallback, useEffect, useState } from 'react'

const Generator = () => {

  const [length, setLength] = useState(5);
  const [password, setPassword] = useState('');
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passwordGenerator = useCallback(()=>{
    let genretedPassword = ''
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed){
      abc += '1234567890'
    }
    if(characterAllowed){
      abc += '!@#$%^&*_-'
    }

    for(let i=1; i<=length; i++){
      let randomNumber = Math.floor(Math.random()*abc.length + 1);
      genretedPassword += abc.charAt(randomNumber);
    }
    setPassword(genretedPassword)
  },[setPassword, length, numberAllowed, characterAllowed])


  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, characterAllowed, passwordGenerator])

 
  const copyPassword = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <div className='w-full max-w-md mx-auto text-center pt-6'>
      <div className='text-orange-500 flex bg-gray-500 py-2 px-6 rounded-xl justify-center mb-5'>Password Generator</div>
      <div>

        
        <div className='flex overflow-hidden bg-gray-500 py-7 px-14 rounded-lg'>
          <input 
          value={password}
          className='rounded-l-lg w-full outline-none'
          type="text" />
          <button
          onClick={copyPassword} 
          className='text-orange-400 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-r-lg'>Copy</button>
        </div>

        <div className='bg-gray-500 px-7 py-5 rounded-lg'>

          <div className='py-5'>
            <input
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            type="range" min={6} max={20}/><label className='pl-2'>Length{length}</label>
          </div>
          <div>
            <input 
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>{
                return !prev
              })
            }}
            type="checkbox" /><label>Numbers</label>
            <input 
            defaultChecked={characterAllowed}
            onChange={()=>{
              setCharacterAllowed((prev)=>{
                return !prev
              })
            }}    
            type="checkbox" /><label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Generator