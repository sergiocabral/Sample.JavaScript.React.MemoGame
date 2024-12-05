import React, { useState, useEffect } from "react";
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
  const [verifying, setVerifying] = useState(false)
  const [cards, setCards] = useState(getCards())

  function onClick(card) {
    if (verifying || card.selected || card.matched) return

    const cardIndex = cards.findIndex(c => c.index == card.index)
    cards[cardIndex].showing = !cards[cardIndex].showing

    cards[cardIndex].selected = true
    const selecteds = cards.filter(card => card.selected)
    if (selecteds.length === 2) {
      setVerifying(true)
    }

    setCards([...cards])
  }

  useEffect(() => {
    if (!verifying) return

    const selecteds = cards.filter(card => card.selected)
    selecteds[0].selected = false
    selecteds[1].selected = false
    if (selecteds[0].icon === selecteds[1].icon) {
      selecteds[0].matched = true
      selecteds[1].matched = true
      setCards([...cards])
      setVerifying(false)
    } else {
      setTimeout(() => {
        selecteds[0].showing = false
        selecteds[1].showing = false
        setCards([...cards])
        setVerifying(false)
      }, 1000)
    }
  }, [verifying])

  return (
    <div style={style}>
      <button style={styleResetButton} onClick={() => setCards(getCards())}>Recomeçar</button>
      {cards.map(card => <Card key={card.index} card={card} onClick={onClick} />)}
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

const styleResetButton = {
  position: 'fixed',
  right: '1em',
  top: '1em',
  padding: '1em',
  borderRadius: '8px',
  cursor: 'pointer',
}