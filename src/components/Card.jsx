import React, { useState } from 'react'

export function Card({ card, onClick }) {
    return (
        <button style={{
            ...style,
            backgroundColor: card.matched ? '#8fbc8f' : '#676767',
        }} onClick={() => onClick(card)}>
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