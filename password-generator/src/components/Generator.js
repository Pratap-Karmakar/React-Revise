import React, { useCallback, useEffect, useRef, useState } from 'react'

const Generator = () => {

    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [characterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("") 


    // password generator function
    const passwordGenerator = useCallback(()=>{
      let pass = '';

      // by this the password will be created
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      // if number are allowed then it will add numbers to the string
      if(numberAllowed){
        str += '0123456789'
      }
      // if character are allowed then it will add characters to the string
      if(characterAllowed){
        str += '!@#$%^&*_-+=[]{}'
      }


      for(let i = 1; i<=length; i++){
        //  it will give us the random numbers as usual, now we are going to use this random number as the index value of the string
        let randomNumber = Math.floor(Math.random()*str.length + 1)

        // here we are using the reandom number as the index value of the string to pick random letters from the string
        pass += str.charAt(randomNumber);
        console.log(pass);
      }

      setPassword(pass)

    }, [length, numberAllowed, characterAllowed, setPassword])

    

    useEffect(()=>{
      passwordGenerator();
    },[length, numberAllowed, characterAllowed, passwordGenerator])




    // to copy the password to clipboard
    const passwordRef = useRef(null);

    const copyPasswordToClipboard = useCallback(()=>{

      // ************ this is the optimised way
      // passwordRef we used useRef hook and stored in passwordRef variable so for that we can access the properties of useRef     >     current means current state and stlect meand to select the current state
      passwordRef.current?.select();

      // we can give the range to get selected and copy
      // passwordRef.current?.setSelectionRange(0, 4);  

      // ********* this is the normal way

      // as we are working on core react that's why we have the access of window object if we work on next.js there we don't have the access of window onject because in next.js the render is on the server side (server side rendering) so in the browser we don't have the access of server

      // this is how we get the access of clipboard
      window.navigator.clipboard.writeText(password)
    },[password])





  return (
    <div className='pt-12'>
        {/* <h1 className='text-4xl text-center text-white'>Password Generator</h1> */}
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 text-center text-orange-400 bg-[#313131]'>
            <p className='mb-2'>Password Genmerator</p>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input 
                type="text"
                className='outline-none w-full py-1 px-3'
                placeholder='Password'
                readOnly
                value={password}
                ref={passwordRef}
                />

                <button 
                className='outline-none bg-blue-700 text-orange-500 px-3 py-0.5 shrink-0 hover:bg-blue-800'
                onClick={copyPasswordToClipboard}
                >Copy</button>
            </div>
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>

                <input 
                type="range"
                min={6}
                max={50}
                value={length}
                className='cursor-pointer' 
                // by this we are taking the value of the range by targeting the value from the event
                onChange={(e)=>{setLength(e.target.value)}}
                /> <label>Length : {length}</label>

              </div>

              <div>
                  <input 
                  className='ml-12'
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id='numberInput'
                  onChange={()=>{
                    // this way we can get the access of the previous value
                    setNumberAllowed((prevValue)=>{
                      return (!prevValue)
                    })
                  }}
                  /> <label>Numbers</label>

                  <input 
                  className='ml-3'
                  type="checkbox"
                  defaultChecked={characterAllowed}
                  onChange={()=>{
                    setCharacterAllowed((prevValue)=>{
                      return (!prevValue)
                    })
                  }}
                  /> <label>Character</label>
              </div>


            </div>
        </div>
    </div>
  )
}

export default Generator