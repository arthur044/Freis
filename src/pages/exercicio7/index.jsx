import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Header from "../../components/header";

export default function Exercicio7() {
  const [cor, setCor] = useState("");
  const [cor2, setCor2] = useState("");
  const [primary, setPrimary] = useState(false);
  const [cors, setCors]  = useState(["red", "green", "blue"]);
  function isPrimaryColor() {
    const colorLower = cor.toLowerCase();
    const color2Lower = cor2.toLowerCase();
    if (cors.includes(colorLower) && cors.includes(color2Lower)){
      setPrimary(true);
    }
}

  return (
    <div className="pagina-e07 pagina">
      <Header />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <h1>Voltar</h1>
            </Link>
            <h2>Exercício 07 - Cores primarias</h2>
          </div>
          <div className="faixa" />
        </div>
        <div className="descricao">
          <p>
          Implementar um programa em javascript para verificar se duas cores são primárias
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="campo">
              <div>
                <label>Cor 1</label>
                <input
                  className="nome"
                  placeholder="Amarelo"
                  onChange={(e) => setCor(e.target.value)} 
                />
              </div>
              <div>
                <label>Cor 2</label>
                <input
                  placeholder="Azul"
                  onChange={(e) => setCor2(e.target.value)}  
                />
              </div>
            </div>
            <div className="execute">
              <button href="#" className="executar" onClick={isPrimaryColor} >
                Executar
              </button>
            </div>
          </div>
          <h3 className="resultado">As duas cores são primarias?: {primary ? 'vedadeiro' : 'falso'} </h3>
        </div>
      </div>
    </div>
  );
}
