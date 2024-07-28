import { ProyectBtn } from "./icons/ProyectBtn.jsx";
import { SeeMore } from "./icons/SeeMore.jsx";

import { React } from "./icons/React.jsx";
import { Node } from "./icons/Node.jsx";
import { JS } from "./icons/JS.jsx";
import { CSS } from "./icons/CSS.jsx";
import { HTML } from "./icons/HTML.jsx";
import { DB } from "./icons/DB.jsx";
import { GitHub } from "./icons/GitHub.jsx";

// Images
import networkOfPostsImage from "../assets/projects/3portfolio.webp"
import flixerDBImage from "../assets/projects/1Portfolio.webp"
import captureTheBallImage from "../assets/projects/4portfolio.webp"

const TAGS = {
  react: {
    name: "React",
    class: "bg-blue-500",
    icon: React,
  },
  node: {
    name: "Node",
    class: "bg-[#346f18]",
    icon: Node,
  },
  js: {
    name: "JavaScript",
    class: "bg-[#f7e04f]",
    icon: JS,
  },
  css: {
    name: "CSS",
    class: "bg-[#3177b9]",
    icon: CSS,
  },
  html: {
    name: "HTML",
    class: "bg-[#e55138]",
    icon: HTML,
  },
  db: {
    name: "PostgreSQL",
    class: "bg-[#478fca]",
    icon: DB,
  },
};

const PROJECTS = [
  {
    title: "Network of Posts (mobile)",
    description:
      "Se trata de crear una red social donde los usuarios pueden registrarse, iniciar sesión y compartir publicaciones. Para esto, se utiliza ReactJS para el diseño web, Node.js para la lógica del servidor y PostgreSQL como base de datos.",
    link: "https://01-red-post-frontend.vercel.app/",
    github: "https://github.com/Exe-Figueroa/01-Red-Post-Frontend",
    image: networkOfPostsImage,
    tags: [TAGS.react, TAGS.node, TAGS.js, TAGS.css, TAGS.html, TAGS.db],
  },
  {
    title: "FlixerDB  (mobile)",
    description:
      "Esta es una aplicación web de una cartelera de películas que utiliza la API de moviedb. Está desarrollada con JavaScript, HTML y CSS, utilizando hash routing para la navegación entre diferentes vistas. La aplicación permite ver películas favoritas, filtrar películas por categorías, añadir películas a favoritos y ver información detallada de cada película en una vista individual.",
    link: "https://movie-db-bice-three.vercel.app",
    github: "https://github.com/Exe-Figueroa/MovieDB",
    image: flixerDBImage,
    tags: [TAGS.js, TAGS.html, TAGS.css],
  },
  // {
  //   title: "Music player (mobile)",
  //   description:
  //     "Este es un simulador de reproductor de música desarrollado utilizando HTML, CSS y JavaScript. La aplicación cuenta con cuatro canciones que se pueden cambiar utilizando los botones Next y Back. Además, incluye una barra de tiempo que muestra el progreso de reproducción de la canción seleccionada. Este proyecto fue creado con el propósito de aprender sobre el manejo del DOM (Document Object Model) y la interacción con etiquetas multimedia en HTML.",
  //   github: "https://github.com/Exe-Figueroa/music-player",
  //   image: "projects/2portfolio.webp",
  //   tags: [TAGS.js, TAGS.html, TAGS.css],
  // },
  {
    title: "Atrapando la pelotita (desktop)",
    description:
      "Se trata de un juego de escritorio desarrollado con HTML, CSS y JavaScript en el que el objetivo es atrapar una pelotita en constante movimiento. El juego fue creado con el propósito de practicar la manipulación del DOM (Document Object Model).",
    link: "https://atrapando-la-pelotita.vercel.app/",
    github: "https://github.com/Exe-Figueroa/AtrapandoLaPelotita",
    image: captureTheBallImage,
    tags: [TAGS.html, TAGS.css, TAGS.js],
  },
];

export const Projects = () => (
  <>
    {PROJECTS.map(({ title, description, github, image, link, tags }, key) => (
      <article key={key} className="mb-8">
        <h3 className="text-2xl font-semibold text-yellow-200 mb-2">{title}</h3>
        <p className="text-lg mb-4 text-pretty">{description}</p>
        <ul className="flex gap-x-2 flex-row flex-wrap">
          {tags.map((tag, i) => (
            <li key={i}>
              <span
                className={`inline-flex py-1 px-2 items-center gap-x-2 rounded-full text-xs mb-4 ${tag.class}`}
              >
                <tag.icon className="size-4" />
                {tag.name}
              </span>
            </li>
          ))}
        </ul>
        <img
          className="rounded shadow-2xl shadow-white/10 mb-4"
          src={image}
          alt={`Captura de pantalla del proyecto ${image}`}
        />
        <div className="w-full flex justify-between items-start gap-2 sm:gap-6">
          <ProyectBtn href={link} target="_blank" rel="noonpener">
            <SeeMore className="size-6" />
            Ver más
          </ProyectBtn>
          <ProyectBtn href={github} target="_blank" rel="noonpener">
            <GitHub className="size-6" />
            GitHub
          </ProyectBtn>
        </div>
      </article>
    ))}
  </>
);
