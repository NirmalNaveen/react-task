import React, {useState} from "react";
import "./App.css";
const App = () => {
  const [counter,setCounter] = useState(0)
  const handleClick1 = () => {
    setCounter(counter + 1 )
  }
  const handleClick2 = () => {
    setCounter(counter - 1)
  } 
  return(
    
    <div style={{
      display: 'flex',
      flexDirection: 'duration',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      counter app
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div classname="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick1}>increment</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick2}>decrement</button>
      </div>
    </div>
  )
        }
  export default App
