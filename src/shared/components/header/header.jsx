import { Logo }  from '../logo/logo.jsx';
import {ThemeToggle} from '../theme/toggleTheme.jsx';
import '../styles/header.scss'

export function Header() {
    return (
        <>
            <header id="header">
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
                                <li><a href="">HOME</a></li>
                                <li><a href="">SOBRE</a></li>
                                <li><a href="">DESTAQUES</a></li>
                                <li><a href="">PROJETOS</a></li>
                                <li><a href="">CONTATO</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}