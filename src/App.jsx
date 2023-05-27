import './styles.scss'
import { useState } from 'react'
import Board from './components/Board'
import { calculateWinner } from './winner'


function App() {
  const [squares,setSquares]=useState(Array(9).fill(null))
    const [isXNext,setisXNext]=useState(false)
    console.log(squares)
    const winner=calculateWinner(squares)
    const msg=isXNext?'X':'O'
    console.log(winner)
    const Wmsg=winner ?`Winner is ${winner}`:`next player is ${msg}`

    const bClick=clickPos=>{
        if(squares[clickPos]){
            return
        }
        setSquares(currentSquares=>{
            return currentSquares.map((squareVal,position)=>{
                    if(clickPos===position){
                        return isXNext?'X':'O'
                    }
                    return squareVal
            })
        })
        setisXNext((current)=>!current)
    }
  return (
    <div className='app'>
      <h2>{Wmsg}</h2>
      <Board squares={squares} bClick={bClick}/>
    </div>
       
  )
}

export default App
