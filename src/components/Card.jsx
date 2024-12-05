import React, { useState } from 'react'

export function Card({ card, onClick }) {
    return (
        <button style={style} onClick={() => onClick(card)}>
            {card.showing ? card.icon : '❔'}
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