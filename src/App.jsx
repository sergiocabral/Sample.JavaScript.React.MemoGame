import React, { useState } from 'react'
import { Board } from './components/Board'

export function App() {
    const [ themeDark, setThemeDark ] = useState(false)

    return (
        <div style={style(themeDark)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                <h1>Jogo da Memória</h1>
                <a style={styleThemButton(themeDark)} href='#' onClick={() => setThemeDark(!themeDark)}>
                    { themeDark ? '🌒' : '🌔'}
                </a>
            </div>            
            <Board themeDark={themeDark} />
        </div>
    )
}

const style = themeDark => ({
    width: '100vw',
    height: '100vh',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em'
})

const styleThemButton = themeDark => ({
    textDecoration: 'none',
    fontSize: '2em',
})