import "./index.scss";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <div className="pagina-sobre">
      <div className="pagina-freis">
        <header>
          <div className="img-frei">
            <img src="/assets/images/logo.svg" alt="" />
            <h3>React FreiS</h3>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Inicio</Link>{" "}
              </li>
              <li>
                <Link to="/aboutUs">Sobre</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="sobre">
          <h1>Sobre</h1>
        <div>
          <p>
            Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é
            ajudar você a aprimorar suas habilidades em Node.js e lógica de
            programação de forma prática e envolvente. Acreditamos que a prática
            constante é essencial para o aprendizado e o aperfeiçoamento em
            tecnologia. Nossa missão é fornecer um ambiente onde você possa
            praticar e testar seus conhecimentos em Node.js e lógica de
            programação, permitindo que você avance no seu próprio ritmo e de
            acordo com suas necessidades. <br /> Seja qual for seu nível de
            experiência, nossa plataforma é o lugar ideal para você crescer e
            desenvolver suas habilidades. Estamos ansiosos para ver seu
            progresso e sucesso!
          </p>
          <img src="/assets/images/logo.svg" alt="" />

        </div>
      </div>
    </div>
  );
}
