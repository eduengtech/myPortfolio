import { Logo } from "../../logo/logo"
import "../../styles/footer.scss"
import { FaGithub, FaLinkedin,FaWhatsapp  } from "react-icons/fa";
export function Footer() {

    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="info__footer">
                        <div className="footer__header">
                            <div className="logo">
                                <Logo />
                            </div>
                            <div className="info__contact">
                                <h3>Contato:</h3>
                                <p>eduardodejesus.dev@gmail.com</p>
                                <p> (73) 9 9973-5102</p>
                            </div>
                            <div className="info__redes">
                                <a href="https://github.com/eduengtech"><span><FaGithub /></span></a>
                                <a href="https://www.linkedin.com/in/eduardovictor/"><span><FaLinkedin /></span></a>
                                <a href="https://wa.me/5573999735102?text=Olá%20Dudu%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20seus%20serviços."><span> <FaWhatsapp /></span></a>
                            </div>
                        </div>
                        <div className="footer__copyright">
                            <p>&copy; {new Date().getFullYear()} Eduardo Victor. Todos os direitos reservados </p>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}