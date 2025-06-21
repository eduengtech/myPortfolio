import { Logo } from "../logo/logo"
import "../styles/footer.scss"
import { FaGithub, FaLinkedin,FaWhatsapp  } from "react-icons/fa";
export function Footer() {

    return (
        <>
            <footer id="footer">
                <div id="container">
                    <div className="info__footer">
                        <div className="logo">
                            <Logo />
                        </div>
                        <div className="info__contact">
                            <a href=""><span><FaGithub /></span></a>
                            <a href=""><span><FaLinkedin /></span></a>
                            <a href=""><span> <FaWhatsapp /></span></a>
                        </div>

                    </div>
                    <div className="footer__copyright">
                        <p>&copy; {new Date().getFullYear()} Eduardo Victor. Todos os direitos reservados </p>
                    </div>

                </div>
            </footer>
        </>
    )
}