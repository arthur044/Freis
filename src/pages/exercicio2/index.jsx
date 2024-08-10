import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function Exercicio2() {
  const [valor, setValor] = useState(0);
  const [res, setRes] = useState(0);
  function calcularValor() {
      setRes(valor/1000);
  }
  return (
    <div className="pagina-e01">
      <div className="cabecalho">
        <div className="titulo">
          <img src="/assets/images/logo.svg" alt="logo" />
          <h1>React FreiS</h1>
        </div>
        <div className="links">
          <Link to="/" className="link">
            Inicio
          </Link>
          <Link to="/sobre" className="link">
            Sobre
          </Link>
        </div>
      </div>
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
            <Link href="#" className="executar" onClick={calcularValor}>
              Executar
            </Link>
          </div>
          <h3 className="resultado">Resultado: O total é {res} Kg</h3>
        </div>
      </div>
    </div>
  );
}
