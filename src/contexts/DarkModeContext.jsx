import { useState, createContext, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === 'true' );

    useEffect(() => {
        localStorage.setItem( "darkMode", darkMode );

        if ( darkMode ) {
            document.documentElement.setAttribute( "data-theme", "dark" );
        }
        else {
            document.documentElement.removeAttribute( "data-theme" );
        }
       
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode( currentState => !currentState);
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}