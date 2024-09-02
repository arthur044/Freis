import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Header from "../../components/header";

export default function Exercicio9() {
  const [res, setRes] = useState("");
  const [gramas, setGramas] = useState(0);
  function calcularValor() {
    let precoPor100g;

    // Verifica se o total de gramas é a partir de 1kg
    if (gramas >= 1000) {
      precoPor100g = 3.0; // Preço reduzido
    } else {
      precoPor100g = 3.5; // Preço normal
    }

    // Calcula o total a pagar
    const totalAPagar = (gramas / 100) * precoPor100g;
    setRes(totalAPagar.toFixed(2));
  }

  return (
    <div className="pagina-e09 pagina">
      <Header />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <h1>Voltar</h1>
            </Link>
            <h2>Exercício 09 - Sorveteria</h2>
          </div>
          <div className="faixa" />
        </div>
        <div className="descricao">
          <p>
            Implementar um programa em javascript que calcule o total a se pagar
            em uma compra na sorveteria, a partir do total de gramas comprado. O
            preço de 100g é R$ 3,50 mas se o total de gramas for a partir de
            1kg, o preço das 100g diminui 50 centavos.
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="campo">
              <div>
                <label>Total de gramas</label>
                <input
                  className="nome"
                  placeholder="quantidade"
                  onChange={(e) => setGramas(e.target.value)}
                />
              </div>
            </div>
            <div className="execute">
              <button href="#" className="executar" onClick={calcularValor}>
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
