import {Email} from "./icons/Email.jsx";
import {GitHub} from "./icons/GitHub.jsx";
import {LinkedIn} from "./icons/LinkedIn.jsx";

export const SocialMediaDescription = ({className})=>(

<ul className={`list-none gap-8 ${className}`}>
  <li className="hover:scale-150 transition">
    <a
      href="https://github.com/Exe-Figueroa"
      target="_blank"
      rel="noonpener"
    >
      <GitHub className="size-6 transition hover:text-sky-200/80" />
    </a>
  </li>
  <li className="hover:scale-150 transition">
    <a
      href="mailto:facundofigueroa789@gmail.com"
      target="_blank"
      rel="noonpener"
    >
      <Email className="size-6 transition hover:text-sky-200/80" />
    </a>
  </li>
  <li className="hover:scale-150 transition">
    <a
      href="https://www.linkedin.com/in/facundo-figueroa-847286270/"
      target="_blank"
      rel="noonpener"
    >
      <LinkedIn className="size-6 transition hover:text-sky-200/80" />
    </a>
  </li>
</ul>
)