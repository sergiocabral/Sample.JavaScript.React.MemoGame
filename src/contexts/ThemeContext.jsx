import React, { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [ themeDark, setThemeDark ] = useState(true)

    return (
        <ThemeContext.Provider value={{ themeDark, setThemeDark }}>
            {children}
        </ThemeContext.Provider>
    )
}