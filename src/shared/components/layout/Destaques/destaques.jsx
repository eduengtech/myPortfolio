import { FaLink, FaGithub } from "react-icons/fa";

export function Destaques() {

    return (
        <>
            <section id="highlights">
                <div className="container">
                    <div className="info_header">
                        <h2 className="title__highlights">Projetos em Destaques</h2> 
                        <h3 className="subtittle__highlights">Projetos desenvolvidos para atender às necessidades específicas de cada cliente.</h3>
                    </div>
                    <div className="grid__card">
                        <div className="card">
                            <div className="img__card">
                                <img src="/image/Rectangle 18.svg" alt="imagem generica" />
                            </div>
                            
                            <div className="card__content">
                                <div className="content">
                                    <h3>Portfólio Pessoal </h3>
                                    <div className="body__card">
                                        <p>Aplicção desenvolvida com objetivo de demonstrar minha trajetória, habilidades e projetos.🧑‍💻</p>
                                    </div>
                                </div>
                                <div className="footer__card">
                                    <p><strong>Stack:</strong> React, Saas, Vite</p>
                                </div>
                                <div className="links__card">
                                    <div className="link_card">
                                        <a href="https://eduardovictor.vercel.app/">
                                            <FaLink />
                                            <span>: Site</span>
                                        </a>
                                    </div>
                                    <div className="card_code">
                                        <a href="https://github.com/eduengtech/myPortfolio.git">
                                            <FaGithub />
                                            <span>: Codigo fonte</span>
                                        </a>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div className="card">
                            <div className="img__card">
                                <img src="/image/Rectangle 18.svg" alt="imagem generica" />
                            </div>
                            <div className="card__content">
                                <div className="content">
                                    <h3>Em breve </h3>
                                    <div className="body__card">
                                        <p>Projeto em com construção 🧑‍💻</p>
                                    </div>
                                </div>
                                <div className="footer__card">
                                    <p><strong>Stack:</strong> a definir</p>
                                </div>
                                <div className="links__card">
                                    <div className="link_card">
                                        <a href="">
                                            <FaLink />
                                            <span>: Site</span>
                                        </a>
                                    </div>
                                    <div className="card_code">
                                        <a href="#">
                                            <FaGithub />
                                            <span>: Codigo fonte</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img__card">
                                <img src="/image/Rectangle 18.svg" alt="imagem generica" />
                            </div>
                            <div className="card__content">
                                <div className="content">
                                    <h3>Em breve </h3>
                                    <div className="body__card">
                                        <p>Projeto em com construção 🧑‍💻</p>
                                    </div>
                                </div>
                                <div className="footer__card">
                                    <p><strong>Stack:</strong> a definir</p>
                                </div>
                                <div className="links__card">
                                    <div className="link_card">
                                        <FaLink />
                                        <span>: Site</span>
                                    </div>
                                    <div className="card_code">
                                        <FaGithub /> 
                                        <span>: Codigo fonte</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}