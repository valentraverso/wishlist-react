import { createContext, useState, useEffect } from "react";

export const themes = {
    light: '',
    dark: 'dark-mode'
}

export const CreateThemeContext = createContext({
    theme: themes.light,
})

export default function ThemeContext(){
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        
    })
}