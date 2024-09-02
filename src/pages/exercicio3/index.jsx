import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Header from "../../components/header";

export default function Exercicio3() {
  const [qtdPeq, setqtdPeq] = useState(0);
  const [qtdMid, setqtdMid] = useState(0);
  const [qtdGG, setqtdGG] = useState(0);
  
  const [res, setRes] = useState(0);
  function calcularValor() {
    let valorTotal = (qtdPeq * 13.50) + (qtdMid * 15.00) + (qtdGG * 17.50)
    setRes(valorTotal)
  }
  return (
    <div className="pagina-e03 pagina">
      <Header />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <h1>Voltar</h1>
            </Link>
            <h2>Exercício 03 - Valor por quantidade</h2>
          </div>
          <div className="faixa" />
        </div>
        <div className="descricao">
          <p>
            Implementar um programa em Javascript para calcular o total de uma
            venda de açaí a partir das quantidades compradas para cada tamanho:
            pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$
            15,00 e R$ 17,50 respectivamente
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="campo">
              <div>
                <label>Quantidade pequeno</label>
                <input
                  placeholder="0"
                  onChange={(e) => setqtdPeq(e.target.value)}
                />
              </div>
              <div>
                <label>Quantidade Medio</label>
                <input
                  placeholder="0"
                  onChange={(e) => setqtdMid(e.target.value)}
                />
              </div>
              <div>
                <label>Quantidade Grande</label>
                <input
                  placeholder="0"
                  onChange={(e) => setqtdGG(e.target.value)}
                />
              </div>
            </div>
            <div className="execute">
              <button className="executar" onClick={calcularValor}>
                Executar
              </button>
            </div>
          </div>
          <h3 className="resultado">Resultado: O total é {res} R$</h3>
        </div>
      </div>
    </div>
  );
}
