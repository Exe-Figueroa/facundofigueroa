
import aboutMeImage from "../assets/3.jpg"
export const About = () => (
    <>
      <h2 className="text-3xl font-semibold  flex gap-x-3 items-center">Sobre mí</h2>
      <hr className="mb-3" />
      <img src={aboutMeImage} alt="" className="w-full md:object-bottom object-cover md:h-80 rounded-lg mb-6 shadow-md shadow-white/10" />
      <div className="text-md font-light opacity-90  flex flex-col gap-2 text-pretty">
        <p className="">
          Soy una persona proactiva y colaborativa, siempre dispuesta a ayudar a los
          demás. Me apasiona el mundo de la programación y la tecnología por su
          constante innovación y las infinitas posibilidades que ofrece.
        </p>
        <p>
          He participado en proyectos de desarrollo de software donde he demostrado
          mis habilidades de trabajo en equipo y resolución de problemas. Además, me
          encantan los animales y disfruto de mantenerme activo físicamente.
        </p>
        <p>
          Estoy comprometido con mi crecimiento personal y estoy constantemente
          mejorando mis habilidades sociales, especialmente en comunicación
          asertiva, trabajo en equipo y empatía, buscando siempre ser una mejor
          versíon de mí
        </p>

      </div>
    </>
  );