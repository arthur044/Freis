import "./index.scss";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="pagina-freis">
      <header>
        <div className="img-frei">
          <img src="/assets/images/logo.svg" alt="" />
          <h3>React FreiS</h3>
        </div>
        <nav className="nav">
          <ul>
            <li>Inicio</li>
            <li>
              <Link to="/aboutUs">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <p>
          <strong>Escolha um treino...</strong>
        </p>
        <div className="exercicios">
          <Link to="/exercicio1">
            <div className="exercicio-desconto">
              <div className="box-yellow"></div>
              <h4>Cupom de desconto</h4>
              <span>Exercicio 1</span>
            </div>
          </Link>
          <Link to="/exercicio2">
            <div className="exercicio-conversor">
              <div className="cor-verde"></div>
              <h4>Converter Kg/gramas</h4>
              <span>Exercicio 2</span>
            </div>
          </Link>
          <Link to="/exercicio3">
            <div className="valorTotal-qtd">
              <div className="cor-azul"></div>
              <h4>Valor total por quantidade</h4>
              <span>Exercicio 3</span>
            </div>
          </Link>
          <Link to="/exercicio4">
            <div className="leitura">
              <div className="cor-laranja"></div>
              <h4>Treino de Leitura</h4>
              <span>Exercicio 4</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
