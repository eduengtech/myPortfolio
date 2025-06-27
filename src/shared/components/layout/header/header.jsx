import { Logo }  from '../../logo/logo.jsx';
import {ThemeToggle} from '../../theme/toggleTheme.jsx';
import '../../styles/header.scss'

export function Header() {
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
                        <div className="navbar">
                            <ul className='nav-link'>
                                <li><a href="#home">HOME</a></li>
                                <li><a href="#about">SOBRE</a></li>
                                <li><a href="#tecnologies">TECNOLOGIAS</a></li>
                                <li><a href="#highlights">DESTAQUES</a></li>
                                <li><a href="#projects" hidden>PROJETOS</a></li>
                                <li><a href="#" className='contact'>CONTATO</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}