import React from 'react'


const CardPoquemon = ({resultado}) => {
  return (
    <div style={{ backgroundColor: "gray", margin: "10px" }}>
      <p>{resultado.name}</p>
      <img src={resultado.url}></img>
    </div>
  )
}

export default CardPoquemon