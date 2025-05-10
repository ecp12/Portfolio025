import  { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-buttons">
        <button className="nav-button">Inicio</button>
        <button className="nav-button">Productos</button>
        <button className="nav-button">Servicios</button>
        <button className="nav-button">Contacto</button>
      </div>
    </nav>
  );
};

export default Nav;