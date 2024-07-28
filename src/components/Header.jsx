import { useState } from "react";

export const Header = () => {
  const [seeMenu, setSeeMenu] = useState(false);
  const toggleSeeMenu = () => setSeeMenu(!seeMenu);

  return (
    <header className="flex justify-end sm:justify-center items-center sm:py-5 w-full mx-auto">
      <div className="w-full relative sm:hidden">
        <div className="fixed top-4 right-4 z-20 w-[50px] h-[50px] flex items-center backdrop-blur-lg rounded-full">
          <input id="checkbox" type="checkbox" onChange={toggleSeeMenu} />
          <label className="toggle -ml-[2px]" htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
        </div>
        <div
          id="menu"
          className={`fixed bottom-full left-0 z-10 w-full h-screen transition duration-500 flex flex-col bg-slate-800 items-center justify-center gap-8 text-2xl font-bold ${
            seeMenu && "translate-y-full"
          }`}
        >
          <a className="anchor" href="#top">
            Inicio
          </a>
          <a className="anchor" href="#experiencia">
            Experiencia
          </a>
          <a className="anchor" href="#proyectos">
            Proyectos
          </a>
          <a className="anchor" href="#sobre-mi">
            Sobre mí
          </a>
        </div>
      </div>
      <nav className="sm:flex sm:px-12 flex-row justify-between opacity-90 w-full md:w-[740px] md:mx-auto hidden lg:w-3/7 lg:ml-auto lg:mr-0 relative z-50">
        <a href="#top">Inicio</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        {/* <a href="#contacto">Contacto</a> */}
      </nav>
    </header>
  );
};
