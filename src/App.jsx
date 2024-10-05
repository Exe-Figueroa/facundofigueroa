import { About } from "./components/About";
import { Badge } from "./components/Badge";
import { Experience } from "./components/Experience";
import { Briefcase } from "./components/icons/Briefcase";
import { Code } from "./components/icons/Code";
import { NavSocialMedia } from "./components/NavSocialMedia";
import { Projects } from "./components/Projects";
import { SectionContainer } from "./components/SectionContainer";
import { SocialMediaDescription } from "./components/SocialMediaDescription";

// Images
import photoPortfolioSmall from "./assets/photo-portfolio-small.png"
import photoPortfolioNormal from "./assets/photo-portfolio.png"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <Header/>
    <main className="p-2 font-custom">
      <SectionContainer
        className="pt-18 pb-32 lg:w-9/10 flex items-center h-fit mt-16 md:mt-0"
        id="inicio"
      >
        <SocialMediaDescription className="hidden sm:flex sm:flex-col" />
        <div className="mx-auto flex flex-col lg:flex-row items-center w-[800px]">
          <article className="flex flex-col md:mx-auto lg:mx-0 gap-4 p-6 h-fit mt-14 lg:mr-20 relative">
            <img
              src={photoPortfolioSmall}
              alt="small profile image"
              className="size-20 rounded-full absolute right-7 top-0 object-cover lg:hidden"
            />
            <h3>JavaScript</h3>
            <h3>Facundo Figueroa</h3>
            <h1 className="font-goblin text-5xl">Web-Developer</h1>
            <h2 className="text-2xl opacity-80 text-wrap">
              <span className="">+1 año de experiencia. </span>
              <span className="text-yellow-200/90">
                Desarrollador Web con JavaScript
              </span>
              .{" "}
              <span className="text-blue-200/90">De Mendoza, Argentina 🇦🇷</span>
              .{" "}
              <span className="opacity-75">
                Especializado en crear aplicaciones únicas
              </span>
              .
            </h2>
            <a
              href="https://www.linkedin.com/in/facundo-figueroa-847286270/"
              target="_blank"
              rel="noonpener"
            >
              <Badge>Disponible para trabajar</Badge>
            </a>
            <NavSocialMedia />
          </article>
          <img
            src={photoPortfolioNormal}
            alt="Profile image"
            className="hidden lg:flex -mt-12 lg:h-[500px]"
            // style="mask-image: linear-gradient(black 80%, transparent"
            style={{maskImage: "linear-gradient(black 80%, transparent)"}}
          />
        </div>
      </SectionContainer>

      <SectionContainer id="experiencia" className="lg:w-[750px]">
        <h2 className="text-2xl font-semibold mb-6 flex gap-x-3 items-center">
          <Briefcase className="size-8" />
          Experiencia
        </h2>
        <Experience />
      </SectionContainer>

      <SectionContainer id="sobre-mi" className="lg:w-[750px]">
        <About />
      </SectionContainer>

      <SectionContainer id="proyectos" className="lg:w-[750px]">
        <h2 className="text-2xl font-semibold mb-6 flex gap-x-3 items-center">
          <Code className="size-8" />
          Proyectos
        </h2>
        <Projects />
      </SectionContainer>
    </main>
    <Footer/>

    </div>
  );
}

export default App;
