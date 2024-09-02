import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Header from "../../components/header";

export default function Exercicio8() {
  const [temperatura, setTemperatura] = useState(0);
  const [res, setRes] = useState("");

  function verificarTemp() {
    if (temperatura >= 41) {
      setRes("Hipertemia");
    } else if (temperatura >= 39.6 && temperatura < 41) {
      setRes("Febre Alta");
    } else if (temperatura >= 37.6 && temperatura < 39.6) {
      setRes("Febre");
    } else if (temperatura >= 36 && temperatura < 37.6) {
      setRes("Normal");
    } else {
      setRes("Hipotermia");
    }
  }
  return (
    <div className="pagina-e08 pagina">
      <Header />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <h1>Voltar</h1>
            </Link>
            <h2>Exercício 08 - Temperatura</h2>
          </div>
          <div className="faixa" />
        </div>
        <div className="descricao">
          <p>
            Implementar um programa em javascript que a partir da temperatura,
            avalie a situação da pessoa conforme a tabela. Ao final, apresente a
            classificação
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="campo">
              <div>
                <label>Temperatura</label>
                <input
                  className="nome"
                  placeholder="Temperatura"
                  onChange={(e) => setTemperatura(e.target.value)}
                />
              </div>
            </div>
            <div className="execute">
              <button href="#" className="executar" onClick={verificarTemp}>
                Executar
              </button>
            </div>
          </div>
          <h3 className="resultado">Resultado: {res} </h3>
        </div>
      </div>
    </div>
  );
}
