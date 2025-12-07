import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [value, setCounter]= useState(0)
  //let counter = 15

  const addValue = () => {
    if(value == 20){
    setCounter(value = 20)  
    }
    else{
      setCounter(value + 1)
    }
  }

  const removeValue = () => {
    if(value > 0) {
    setCounter(value - 1)
    }
    else {
      setCounter(value = 0)
    }
  }

  return (
    <>
    <h1>HOOK REACT</h1>
    <h2>counter value: {value}</h2>
    <button onClick={addValue}>Add value {value}</button>
    <br />
    <br />
    <button onClick={removeValue}>remove value {value}</button>
    <p>footer:{value}</p>
    </>
  )
}

export default App
