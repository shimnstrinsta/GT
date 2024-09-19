import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const [iconA, setIcon] = useState(faSun);

  useEffect(() => {
    setIcon(theme === 'light' ? faSun : faMoon); 
  },[theme]);

  return (
    <div className='header_container'>        
        <div>
            <h1 className='header_title'>Mercado liebre</h1>
            <div className='header_container_theme'><button className='header_theme' onClick={toggleTheme}><p>Tema</p><FontAwesomeIcon icon={iconA} /></button></div>
        </div>
    </div>
  );
}
