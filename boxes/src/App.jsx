import { useState } from 'react'
import './App.css'
import Boxes from './Boxes'
import Box from './Box'

function App() {
   
 const [squares, setSquares] = useState(Boxes)
   
 function toggle(id){
  console.log(id);

  setSquares(prevSquares => {
   return prevSquares.map((square)=>{
    return square.id === id?{...square,on:!square.on} :square
   })
})

    }
       


  
  //setOn(prevOn=> !prevOn)

    const squareElement = squares.map(square=> {
    return (<Box 
    
      key={square.id} 
      on={square.on} 
      toggle={() => toggle(square.id)}
    />)
    })
    
  return (
    <main>

       <h1>Boxes will go here</h1>
         {squareElement}
    </main>
  )
}

export default App
