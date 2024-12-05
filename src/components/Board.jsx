import React, { useState } from 'react'
import { Card } from './Card'

const icons = [
    '🐳', '😈', '🤡', '🧐',
    '🤢', '🙊', '🐸', '🐼',
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
    const [ cards, setCards ] = useState(getCards())

    function onClick(card) {
        const cardIndex = cards.findIndex(c => c.index === card.index)
        cards[cardIndex].showing = !cards[cardIndex].showing
        setCards([...cards])
    }

    return (
        <div style={style}>
            {cards.map((card, index) => (
                <Card key={index} card={card} onClick={onClick} />
            ))}
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