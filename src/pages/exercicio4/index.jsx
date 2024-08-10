import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";

export default function Exercicio4() {
  const [nomeDolivro, setNome] = useState('');
  const [qtdPaginas, setQtdPaginas] = useState(0);
  const [tempoLeitura, setTempo] = useState(0);
  
  const [res, setRes] = useState(0);
  function calcularValor() {
    let calcularTempo = (qtdPaginas * tempoLeitura) / 3600
    setRes(calcularTempo.toFixed(2))
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
            <h2>Exercício 04 - Leitura</h2>
          </div>
          <div className="faixa" />
        </div>
        <div className="descricao">
          <p>
          Implementar um programa em React que Calcule o tempo que um livro será lido por uma pessoa a partir  do nome do livro, do total de paginas e do tempo em segundos de leitura por pagina.
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="campo">
              <div>
                <label>Nome do livro</label>
                <input className="nome"
                  placeholder="Nome"
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div>
                <label>Quantidade de paginas</label>
                <input
                  placeholder="0"
                  onChange={(e) => setQtdPaginas(e.target.value)}
                />
              </div>
              <div>
                <label>Tempo em segundos</label>
                <input
                  placeholder="0"
                  onChange={(e) => setTempo(e.target.value)}
                />
              </div>
            </div>
            <div className="execute">
              <Link href="#" className="executar" onClick={calcularValor}>
                Executar
              </Link>
            </div>
          </div>
          <h3 className="resultado">Resultado: O tempo de leitura é {res}H</h3>
        </div>
      </div>
    </div>
  );
}
