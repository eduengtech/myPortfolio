import { Logo }  from '../../logo/logo.jsx';
import {ThemeToggle} from '../../theme/toggleTheme.jsx';
import '../../styles/header.scss'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    return (
        <>
            <header id="home">
                <div className="container">
                    <div className="info__header">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="toggle-switch">
                        <ThemeToggle />
                        </div>

                        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <FaBars />
                        </button>

                        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                            <ul className='nav-link'>
                                <li><a href="#">HOME</a></li>
                                <li><a href="#about">SOBRE</a></li>
                                <li><a href="#tecnologies">TECNOLOGIAS</a></li>
                                <li><a href="#highlights">DESTAQUES</a></li>
                                <li><a href="#projects" hidden>PROJETOS</a></li>
                                <li><a   href="https://wa.me/5573999735102?text=Olá%20Dudu%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20seus%20serviços."
                                target="_blank"
                                rel="noopener noreferrer" className='contact'
                                >
                                    CONTATO
                                </a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}