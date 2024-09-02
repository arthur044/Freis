import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Header from "../../components/header";

export default function Exercicio6() {
  const [salario, setSalario] = useState(0); 
  const [bonus, setBonus] = useState(0);
  const [desconto, setDesconto] = useState(0);
  
  const [res, setRes] = useState(0);
  function calcularValor() {
   // DICA: (1000 * (10 / 100)) - 300 = 800,00
   let total = 0
   let bonusTotal = (bonus * salario) / 100 
   total = (salario + bonusTotal) - desconto
   setRes(total)

  }
  return (
    <div className="pagina-e06 pagina">
      <Header />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <h1>Voltar</h1>
            </Link>
            <h2>Exercício 06 - Salário líquido</h2>
          </div>
          <div className="faixa" />
        </div>
        <div className="descricao">
          <p>
          Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="campo">
              <div>
                <label>Salário Base</label>
                <input className="nome"
                  placeholder="1000"
                  onChange={(e) => setSalario(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Bônus mensal em porcentagem</label>
                <input
                  placeholder="10"
                  onChange={(e) => setBonus(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Total de desconto</label>
                <input
                  placeholder="0"
                  onChange={(e) => setDesconto(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="execute">
              <Link href="#" className="executar" onClick={calcularValor}>
                Executar
              </Link>
            </div>
          </div>
          <h3 className="resultado">Total do salario: {res}</h3>
        </div>
      </div>
    </div>
  );
}
