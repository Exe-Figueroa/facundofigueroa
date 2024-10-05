import { ExperienceItem } from "./ExperienceItem.jsx";

const EXPERIENCES = [
  {
    date: "Actualidad",
    title: "Desarrollador Junior en Nogadev",
    description:
      "Colaboro activamente en la resolución de problemas tanto en el front como en el backend de los proyectos en los que estoy involucrado, aplicamos metodología scrum para gestionar tareas de manera eficiente y agilizar así el completado de las mismas. Estoy en constante aprendizaje y crecimiento. Cada conocimiento nuevo es un escalón más en mi desarrollo profesional y una oportunidad para mejorar mis habilidades en el desarrollo.",
    link: "https://www.nogadev.com",
  },
  {
    date: "2023 - 2024",
    title: "Estudiante de La Cantera Software",
    description:
      "Cursé diariamente en las oficinas de La Cantera Software, aprendiendo sobre desarrollo web y otras tecnologías. En este lugar he aprendido a trabajar en equipo, a utilizar herramientas de control de versiones y a desarrollar proyectos reales.",
    link: "https://www.canterasoft.com/",
  },
];

export const Experience = () => {
  return (
    <ol className="relative border-s dark:border-gray-200 ml-3">
      {
        EXPERIENCES.map((item, key) => (
          <li key={key} className="mb-10 ms-4">
            <ExperienceItem {...item} />
          </li>
        ))
      }
    </ol>
  )
}