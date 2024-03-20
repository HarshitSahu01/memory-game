import React, { useState } from 'react'
import GameBoard from './Components/GameBoard'
import Test from './Components/assets/Test'

export default function App() {
  const [stage, setStage] = useState(0);
  return (
    <div>
      <div className='flex justify-center m-8'>
        <span className='font-sans text-5xl underline '>
          Memoryy Game
        </span>
      </div>
      <div>
        <GameBoard />
      </div>
      {/* <Test /> */}
    </div>
  )
}

