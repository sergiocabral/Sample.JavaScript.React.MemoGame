import React from "react";

export function Card(props) {
  return (
    <button style={style}>
      {props.children}
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