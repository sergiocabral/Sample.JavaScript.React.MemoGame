import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Card } from "./Card.jsx";

export function Board({ themeDark }) {
  const [restarted, restart] = useState()
  const icons = useMemo(() => [
    '😺', '🐶', '🤖', '🪲', '🤡', '🐔', '💀', '🐋',
    '🐵', '🐷', '🐰', '🐦', '🐉', '🐢', '🐟', '🦈',
    '🦋', '🐞', '🕷️', '🦄', '🍎', '🍇', '🍌', '🍉',
    '⚽', '🏀', '🏈', '🎾', '🎸', '🎻', '🥁', '🎺',
    '🚗', '🚕', '✈️', '🚢', '💡', '📱', '📸', '💻',
    '⭐', '🌈', '🔥', '❄️', '🎨', '🎯', '🎮', '🎲',
    '🥇', '🥈', '🥉', '🏅', '🎐', '🎎', '🎏', '🎀',
    '🚀', '🚤', '🚲', '🛸', '🐩', '🐒', '🦔', '🐓',
    '🐿️', '🦝', '🦢', '🦜', '🍔', '🍟', '🍕', '🌭',
    '🌮', '🌯', '🍩', '🍪', '🌸', '🌻', '🌼', '🌺',
    '🏠', '🏡', '🏢', '🏗️', '🚧', '🚨', '🚦', '🚥',
    '⛺', '🗿', '🎃', '🎄', '🎋', '🎍', '🎆', '🎇',
  ].sort(() => Math.random() - 0.5).slice(0, 8), [restarted]);

  const getCards = useCallback(() =>
    [...icons, ...icons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        index,
        icon,
        showing: false,
        selected: false,
        matched: false,
      })))

  const [verifying, setVerifying] = useState(false)
  const [cards, setCards] = useState(getCards())
  const restartButton = useRef(null)

  useEffect(() => {
    setCards(getCards())
  }, [restarted])

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
      checkWin()
    } else {
      setTimeout(() => {
        selecteds[0].showing = false
        selecteds[1].showing = false
        setCards([...cards])
        setVerifying(false)
      }, 1000)
    }
  }, [verifying])

  function checkWin() {
    if (!cards.find(card => !card.matched)) {
      setTimeout(() => restartButton.current.style.visibility = 'hidden', 0)
      setTimeout(() => restartButton.current.style.visibility = '', 200)
      setTimeout(() => restartButton.current.style.visibility = 'hidden', 400)
      setTimeout(() => restartButton.current.style.visibility = '', 600)
    }
  }

  return (
    <div style={style(themeDark)}>
      <button ref={restartButton} style={styleResetButton(themeDark)} onClick={() => restart(Math.random())}>Recomeçar</button>
      {cards.map(card => <Card key={card.index} card={card} onClick={onClick} themeDark={themeDark} />)}
    </div>
  )
}

const style = themeDark => ({
  backgroundColor: themeDark ? '#2f2f2f' : '#f0f0f0',
  flexGrow: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gap: '1em',
  padding: '1em',
})

const styleResetButton = themeDark => ({
  position: 'fixed',
  right: '1em',
  top: '1em',
  padding: '1em',
  borderRadius: '8px',
  cursor: 'pointer',
})