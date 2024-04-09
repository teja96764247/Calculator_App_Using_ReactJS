import './keypad'
import Keypad from './keypad'
import './App.css'
import React,{useState} from 'react';
function App()
{
  
  let [input,setInput]=useState('')

  function handleclick(value){
    setInput(input+value)

  }
  function calculate(value){
    let outputval=eval(input)
    setInput(outputval)
  }
  function clearscreen(){
    setInput('');
  }


  return (
    <>
    <div className="container">
      <h1>Calculator App using ReactJS</h1>
      <div class='calculator'>
        <input type='text' value={input} className="output"/>
        <Keypad handleclick={handleclick} calculate={calculate} clearscreen={clearscreen}></Keypad>


      </div>

    </div>
    </>
  )
}


export default App;