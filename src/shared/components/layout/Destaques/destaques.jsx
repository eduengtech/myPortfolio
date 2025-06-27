

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
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}