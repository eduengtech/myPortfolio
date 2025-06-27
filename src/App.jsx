import { Header } from "./shared/components/layout/header/header";
import { Hero } from "./shared/components/layout/hero/Hero";
import {About}  from "./shared/components/layout/sobre/about";
import { Tecnologies } from "./shared/components/layout/tecnologias/tecnologias";
import {Destaques}  from "./shared/components/layout/Destaques/destaques";
import { Footer } from "./shared/components/layout/footer/footer";


function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tecnologies />
      <Destaques />
      <Footer/>
    </>
  );
}

export default App
