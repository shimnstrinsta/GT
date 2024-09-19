import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate,Link } from 'react-router-dom';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const [iconA, setIcon] = useState(faSun);
  const navigate = useNavigate();

  useEffect(() => {
    setIcon(theme === 'light' ? faSun : faMoon); 
  },[theme]);

  return (
    <div className='header_container'>        
        <div>
            <h1 className='header_title'><Link to={'/'}>Mercado liebre</Link></h1>
            <div className='header_container_theme'><button className='header_theme' onClick={toggleTheme}><p>Tema</p><FontAwesomeIcon icon={iconA} /></button></div>
            <div className='header_container_cart'><button className='header_cart' onClick={() => navigate('/cart')}><p>Carrito</p><FontAwesomeIcon icon={faCartShopping} /></button></div>
        </div>
    </div>
  );
}
