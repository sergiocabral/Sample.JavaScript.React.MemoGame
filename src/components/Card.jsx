import React, { useState } from "react";

export function Card({ card }) {
  const [showing, show] = useState(false);

  function onClick() {
    show(!showing)
  }

  return (
    <button style={style} onClick={onClick}>
      {showing ? card.icon : '❔'}
    </button>
  )
}

const style = {
  backgroundColor: '#676767',
  fontSize: '3em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '16px',
  border: '1px solid #1a1a1a',
  cursor: 'pointer',
}