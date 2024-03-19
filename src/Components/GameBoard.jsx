import React, { useState } from 'react'
import Block from './Block'
import Style from '../Stylesheets/GameBoard.module.css'
import getArray from './assets/utils'

export default function GameBoard() {
  const [arr, setArr] = useState(getArray());
  const [prev, setPrev] = useState(null);
  const [settings, setSettings] = useState({remaining:14});
  let cpy;
  const updateBoard = (id) => {
    console.log('clicked: '+id + 'was: '+prev);
    if (id == prev) return;
    cpy = [...arr];
    cpy[id].flipped = !cpy[id].flipped;
    console.log(arr)
    setArr(cpy);
    console.log(arr)
    if (prev == null) {
      setPrev(id);
    } else {
      if (cpy[id].emoji != cpy[prev].emoji) {
        setTimeout(() => {
          console.log('flipping algo');
          console.log(arr);
          cpy[id].flipped = false;
          cpy[prev].flipped = false;
          setArr(cpy);
          console.log(arr);
        }, 100);
      } else {
        cpy[id].used = true;
        cpy[prev].used = true;
        setArr(cpy);
        setSettings({...settings, remaining: settings.remaining - 2})
        console.log(settings.remaining);
      }
      setPrev(null);
      if(settings.remaining == 0) setTimeout(() => {alert("wow you won!");}, 300);
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <div className={Style.gameboard}>
        {arr.map((item, index) => {
          return <Block key={index} item={item} updateBoard={updateBoard}/>
        })}
      </div>
    </div>
  )
}
