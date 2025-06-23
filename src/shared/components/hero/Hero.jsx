import '../styles/hero.scss'
import { TypeAnimation } from 'react-type-animation';

export function Hero() {

    return (
        <>
            <div className="container">
                <section className="info__hero">
                    <div className="hero__apresentation">
                        <h1 className="title">
                            Olá! <br />
                            meu nome <span className="name__apresentation">Eduardo Victor </span> <br />
                            Desenvolvedor {''}
                            <TypeAnimation
                                sequence={[
                                    'Frontend', 2500,         
                                    () => {},                 
                                    '',                       
                                    1000,                      
                                    'Backend', 2500,          
                                    '',                     
                                ]}
                                wrapper="span"
                                speed={120}
                                deletionSpeed={100}  
                                repeat={Infinity}
                                className="text__animation"
                            />
                        </h1>
                        <p className="hero__subtitle">Transformo ideias em soluções digitais modernas, acessíveis e eficientes.Te ajudo a tirar projetos do papel com tecnologia, design e propósito.</p>
                    </div>

                    <div className="hero__avatar">
                        <img src="/image/_perfil__img.jpg" alt="_perfil__img" className="heroPerfil" />
                    </div>
                </section>
            </div>
        </>
    )
}