import {Email} from "./icons/Email.jsx";
import {GitHub} from "./icons/GitHub.jsx";
import {LinkedIn} from "./icons/LinkedIn.jsx";
import {SocialPill} from "./icons/SocialPill.jsx";


export const NavSocialMedia = ({className}) => (
  <nav className={`flex flex-wrap gap-4 mt-8 sm:hidden ${className}`}>
  <SocialPill
    href="https://www.linkedin.com/in/facundo-figueroa-847286270/"
    target="_blank"
    rel="noonpener"
  >
    <LinkedIn className="size-6" />
    LinkedIn
  </SocialPill>
  <SocialPill
    href="https://github.com/Exe-Figueroa"
    target="_blank"
    rel="noonpener"
  >
    <GitHub className="size-6" />
    GitHub
  </SocialPill>

  <SocialPill
    href="mailto:facundofigueroa789@gmail.com"
    target="_blank"
    rel="noonpener"
  >
    <Email className="size-6" />
    facundofigueroa789@gmail.com
  </SocialPill>
</nav>
)