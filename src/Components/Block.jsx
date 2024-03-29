import React, {useState, useEffect} from 'react'
import Style from '../Stylesheets/Block.module.css'

export default function Block({item, updateBoard}) {
  const def = '✨';
  const {emoji, flipped, used, id} = item;

  return (
    <div onClick={()=>used?false:updateBoard(id)} >
    <div className={`${Style.block} ${flipped?Style.flipped:null} ${used?Style.used:null}`} >
      {flipped?emoji:def}
      </div>
    </div>
  )
}

/*
style={{visibility:(used?'hidden':'visible')}}
*/
