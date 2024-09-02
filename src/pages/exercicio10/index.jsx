import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../components/header";

import { withMask } from "use-mask-input";
import { useState } from "react";

export default function ExerciceTen() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [listaDeResultados, setListaDeResultados] = useState([]);
  const [resultadoImc, setResultadoImc] = useState({
    peso: 0,
    altura: 0,
    resultado: "",
  });

  function calcularImc() {
    let calculo = Number(peso) / (Number(altura) * Number(altura));

    let resultado = "";

    if (calculo < 16.9) {
      resultado = "Muito abaixo do peso";
    } else if (calculo >= 17 && calculo < 18.4) {
      resultado = "Abaixo do peso";
    } else if (calculo >= 18.5 && calculo < 24.9) {
      resultado = "Peso normal";
    } else if (calculo >= 25 && calculo < 29.9) {
      resultado = "Acima do peso";
    } else if (calculo >= 30 && calculo < 34.9) {
      resultado = "Obesidade Grau I";
    } else if (calculo >= 35 && calculo <= 40) {
      resultado = "Obesidade Grau II";
    } else if (calculo > 40) {
      resultado = "Obesidade Grau III";
    }
  }

  return (
    <>
      <Header />
      <section className="container">
        <div className="title-container">
          <Link to="/">
            <img
              className="back-button"
              src="./images/back-button.png"
              alt=""
            />
          </Link>
          <h1>Exercício 10 - Calculo de IMC com histórico</h1>
        </div>
        <div className="line3" />

        <div className="box-container">
          <p>
            Implemente um programa em Javascript que a partir da altura e do
            peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a
            tabela ao lado. Ao final, apresente o IMC e a situação
          </p>
        </div>

        <div className="main-container">
          <form>
            <div className="content">
              <div className="input-group">
                <label htmlFor="altura">Altura</label>
                <input
                  type="text"
                  id="altura"
                  placeholder="1.73"
                  ref={withMask("9.99")}
                  onChange={(e) => setAltura(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="peso">Peso</label>
                <input
                  type="text"
                  id="peso"
                  placeholder="55"
                  ref={withMask("99")}
                  onChange={(e) => setPeso(e.target.value)}
                />
              </div>
            </div>

            <button type="button" onClick={calcularImc}>
              Executar
            </button>
          </form>

          <div className="results">
            <div className="resultado-item">

              <p>Altura:  | Peso: 80.5 | Situação: Peso Normal</p>
              <span>✖</span>

            </div>
        
            <div className="resultado-item">
              <p>Altura: 1.80 | Peso: 80.5 | Situação: Peso Normal</p>
              <span>✖</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}