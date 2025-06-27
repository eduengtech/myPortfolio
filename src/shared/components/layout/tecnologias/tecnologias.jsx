import '../../styles/tecnologies.scss'

export function Tecnologies() {

    return (

        <>
            <section id="tecnologies">
                <div className="container">
                    <div className="info__tecnologies">
                        <div className="info_header">
                            <h2 className='title__tecnologies'>Tecnologias</h2>
                            <h3 className="subtitle__tecnologies">Estas são algumas das tecnologias que utilizo em meus projetos</h3>
                        </div>
                        <div className="container_tecnologies">
                            <div className="tecnologies_grid">
                                <img src="/image/html.svg" alt="" />
                                <img src="/image/css.svg" alt="" />
                                <img src="/image/js.svg" alt="" />
                                <img src="/image/react.svg" alt="" />
                                <img src="/image/next.svg" alt="" />
                                <img src="/image/bootstrap.svg" alt="" />
                            </div>
                            <div className="tecnologies_grid">
                                <img src="/image/sass.svg" alt="" />
                                <img src="/image/git.svg" alt="" />
                                <img src="/image/postgresql.svg" alt="" />
                                <img src="/image/vscode.svg" alt="" />
                                <img src="/image/NestJS.svg" alt="" />
                                <img src="/image/github.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

