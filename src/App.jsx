import React from 'react'
import GameBoard from './Components/GameBoard2'
import Test from './Components/assets/Test'

export default function App() {
  return (
    <div>
      <div className='flex justify-center m-8'>
        <span className='font-sans text-5xl underline '>
          Memoryy Game
        </span>
      </div>
      <GameBoard />
      {/* <Test /> */}
    </div>
  )
}

