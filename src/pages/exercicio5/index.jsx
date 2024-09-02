import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Header from "../../components/header";

export default function Exercicio5() {
  const [nota, setNota] = useState([]);
  const [res, setRes] = useState(0);
  function calcularNota() {
    const media = nota.reduce((acumulador, nota) => acumulador + nota, 0) / nota.length;
    setRes(media)
  }
  /*
  nota.reduce((acumulador, nota) => acumulador + nota, 0): Aqui, o método reduce está sendo usado para somar todos os elementos do array nota. O reduce funciona assim:

  acumulador é o valor acumulado até o momento (começa em 0, conforme o segundo argumento do reduce).
  nota é o valor atual do array que está sendo processado.
  A função (acumulador, nota) => acumulador + nota adiciona cada valor do array ao acumulador.
  Portanto, essa parte do código calcula a soma total dos elementos do array nota.

  / nota.length: Depois de obter a soma total dos elementos, você divide esse total pelo número de elementos no array nota (ou seja, o comprimento do array).
  */
  return (
    <div className="pagina-e05 pagina">
      <Header />
      <div className="exercicio">
        <div className="titulo">
          <div className="texto">
            <Link to="/">
              <h1>Voltar</h1>
            </Link>
            <h2>Exercício 05 - Média de notas</h2>
          </div>
          <div className="faixa" />
        </div>
        <div className="descricao">
          <p>
            Implemente um programa em Javascript para verificar se um aluno
            passou ou não, baseado em 3 notas, considerando que a média mínima
            para passar é 6.
          </p>
        </div>
        <div className="formulario">
          <div className="campos">
            <div className="campo">
              <div>
                <label>Nota 1</label>
                <input
                  className="nome"
                  placeholder="0"
                  onChange={(e) => setNota([...nota, Number(e.target.value)])}
                />
              </div>
              <div>
                <label>Nota 2</label>
                <input
                  placeholder="0"
                  onChange={(e) => setNota([...nota, Number(e.target.value)])}
                />
              </div>
              <div>
                <label>Nota 3</label>
                <input
                  placeholder="0"
                  onChange={(e) => setNota([...nota, Number(e.target.value)])}
                />
              </div>
            </div>
            <div className="execute">
              <button href="#" className="executar" onClick={calcularNota}>
                Executar
              </button>
            </div>
          </div>
          <h3 className="resultado">Resultado: A média final é :{res.toFixed(1)}</h3>
        </div>
      </div>
    </div>
  );
}
