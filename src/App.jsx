import React, { useContext } from "react";
import { Board } from "./components/Board";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext.jsx";

export function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  )
}

function Content() {
  const { themeDark, setThemeDark } = useContext(ThemeContext)

  return (
    <div style={style(themeDark)}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1>Jogo da Memória</h1>
        <a href="#" style={{ fontSize: '2em', textDecoration: 'none', paddingLeft: '0.5em' }} onClick={() => setThemeDark(!themeDark)}>
          {themeDark ? '🌘' : '🌖'}
        </a>
      </div>
      <Board />
    </div>
  )
}

const style = themeDark => ({
  width: '100vw',
  height: '100vh',
  padding: '1em',
  display: 'flex',
  flexDirection: 'column',
  gap: '1em',
  backgroundColor: themeDark ? '#212121' : '#cacaca',
  color: themeDark ? '#FFFFFF' : '#000000',
})