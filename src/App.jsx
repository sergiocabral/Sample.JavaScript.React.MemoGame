import React from 'react'
import { Board } from './components/Board'

export function App() {
    return (
        <div style={style}>
            <h1>Jogo da Memória</h1>
            <Board />
        </div>
    )
}

const style = {
    width: '100vw',
    height: '100vh',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em'
}