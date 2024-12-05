import React, { useState } from 'react'

export function Card({ card, onClick, themeDark }) {
    return (
        <button style={style(themeDark, card.matched)} onClick={() => onClick(card)}>
            {card.showing ? card.icon : '❔'}
            <span style={{ fontSize: '0.3em' }}>{card.icon}</span>
        </button>
    )
}

const style = (themeDark, matched) => ({
    backgroundColor: themeDark ? (matched ? '#8fbc8f' : '#676767') : (matched ? '#00ff00' : '#f0f0f0'),
    fontSize: '3em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
    border: '1px solid #1a1a1a',
    cursor: 'pointer',
})