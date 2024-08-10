import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function E01() {
  const [valor, setValor] = useState(0);
  const [cupom, setCupom] = useState("");
  const [res, setRes] = useState(0);
  function calcularValor() {
    if (cupom == "") {
      setRes(valor);
    } else {
      setRes(valor-cupom)
    }
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
              {/* <img src="/voltar.png" alt="voltar" /> */}
              <h1>Voltar</h1>
            </Link>
            <h2>Exercício 01 - Cupom de desconto</h2>
          </div>
          <div className="faixa" />
        </div>
        <div className="descricao">
          <p>
            Implementar um programa em <b>Javascript</b> para calcular o valor
            final de uma compra a partir do valor da compra e do cupom de
            desconto. <b>O cupom diz quantos reais</b> terá de desconto.
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="campo">
              <label>Informe o valor do pedido</label>
              <input placeholder="0" onChange={e => setValor(e.target.value)}/>
            </div>
            <div className="campo">
              <label>Informe o valor do cupom</label>
              <input placeholder="0" onChange={e => setCupom(e.target.value)}/>
            </div>
            <Link href="#" className="executar" onClick={calcularValor}>
              Executar
            </Link>
          </div>
          <h3 className="resultado">Resultado: O total é {res}</h3>
        </div>
      </div>
    </div>
  );
}
