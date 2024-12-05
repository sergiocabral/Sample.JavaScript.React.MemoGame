import React, { useState } from "react";
import { Card } from "./Card.jsx";

const icons = [
  '😺', '🐶', '🤖', '🪲',
  '🤡', '🐔', '💀', '🐋',
]

function getCards() {
  return [...icons, ...icons]
    .sort(() => Math.random() - 0.5)
    .map((icon, index) => ({
      index,
      icon,
      showing: false,
      selected: false,
      matched: false,
    }))
}

export function Board() {
  const [cards, setCards] = useState(getCards())

  return (
    <div style={style}>
      {cards.map(card => <Card key={card.index} card={card} />)}
    </div>
  )
}

const style = {
  backgroundColor: '#2f2f2f',
  flexGrow: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gap: '1em',
  padding: '1em',
}