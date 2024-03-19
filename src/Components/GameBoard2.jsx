import React, { useState } from 'react'
import Block from './Block2'
import Style from '../Stylesheets/GameBoard.module.css'
import getArray from './assets/utils2'

export default function GameBoard() {
  const [cards, setCards] = useState(getArray());
  const [prev, setPrev] = useState(null);
  const [settings, setSettings] = useState({ remaining: 7 });
  const [moves, setMoves] = useState(0);

  const updateBoard = (id) => {
    setMoves(moves + 1);
    if (id == prev) return;
    setCards(prevCards => {
      const updatedCards = { ...prevCards };
      updatedCards[id].flipped = true;
      return updatedCards;
    });

    if (prev == null) {
      setPrev(id);
    } else {
      if (cards[id].emoji != cards[prev].emoji) {
        setTimeout(() => {
          setCards(prevCards => {
            const updatedCards = { ...prevCards };
            updatedCards[id].flipped = false;
            updatedCards[prev].flipped = false;
            return updatedCards;
          });
        }, 1000);
      }
      else {
        setCards(prevCards => {
          const updatedCards = { ...prevCards };
          updatedCards[id].used = true;
          updatedCards[prev].used = true;
          return updatedCards;
        })
        setSettings({ ...settings, remaining: settings.remaining - 1 })
      }
      setPrev(null);
      if (settings.remaining == 0) setTimeout(() => { alert("You won!"); }, 300);
    }
  }

  return (
    <>
      <div className="score">Turns: {moves}</div>
      <div className='flex justify-center items-center'>
        <div className={Style.gameboard}>
          {
            Object.keys(cards).map((item, index) => {
              return <Block key={index} item={cards[item]} updateBoard={updateBoard} />
            })
          }
        </div>
      </div>
    </>
  )
}
