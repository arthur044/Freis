import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Header from "../../components/header";

export default function Exercicio2() {
  const [valor, setValor] = useState(0);
  const [res, setRes] = useState(0);
  function calcularValor() {
      setRes(valor/1000);
  }
  return (
    <div className="pagina-e02 ">
      <Header />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <h1>Voltar</h1>
            </Link>
            <h2>Exercício 02 - Converter Kg/gramas</h2>
          </div>
          <div className="faixa" />
        </div>
        <div className="descricao">
          <p>
          Implementar um programa em Javascript para converter kilos em gramas
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="campo">
              <label>Informe o valor em gramas</label>
              <input placeholder="0" onChange={e => setValor(e.target.value)}/>
            </div>
            <button href="#" className="executar" onClick={calcularValor}>
              Executar
            </button>
          </div>
          <h3 className="resultado">Resultado: O total é {res} Kg</h3>
        </div>
      </div>
    </div>
  );
}
