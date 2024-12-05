import React from "react";

export function Card({ card, onClick, themeDark }) {
  return (
    <button style={style(themeDark, card.matched)} onClick={() => onClick(card)}>
      {card.showing ? card.icon : '❔'}
    </button>
  )
}

const style = (themeDark, matched) => ({
  backgroundColor: themeDark ? (matched ? '#658e7d' : '#676767') : (matched ? '#0dcbbf' : '#262626'),
  fontSize: '3em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '16px',
  border: `1px solid ${themeDark ? '#1a1a1a' : '#fafafa'}`,
  cursor: 'pointer',
})