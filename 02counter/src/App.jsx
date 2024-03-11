
import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 15

  let [counter, setCounter] = useState(0)

  const addValue=()=>{
    counter = counter + 1;
    setCounter(counter)

    // setCounter(counter +1)

    console.log(counter);

  }

  const removeValue = () =>{
    counter = counter - 1;
    setCounter(counter)

    console.log(counter);
  }

  return (
   <div>
    <h1>Chai aur react</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Increase Value</button>
    <br />
    <button onClick={removeValue}>Decrease Value</button>
   </div>
  )
}

export default App
