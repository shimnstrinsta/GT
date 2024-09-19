import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext';

export default function Footeer() {
    const { theme, toggleTheme } = useContext(ThemeContext);   
    return (
        <div className={'footer_container '+'footer_container_'+theme}>        
            <div>
                <h4>©2024 - Todos los derechos reservados</h4>
            </div>
        </div>
    )
}
