import { Link } from "react-router-dom";
import Header  from "../../components/header";
import "./styles.scss";
import { useState } from "react";

export default function Exercicio1() {
  const [valorPedido, setValorPedido] = useState(0);
  const [valorCupom, setValorCupom] = useState(0);
  const [total, setTotal] = useState(0);

  function calcularTotal() {
    const totalPedido = valorPedido - valorCupom;
    setTotal(totalPedido);
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
          <h1>Exercício 01 - Cupom de desconto</h1>
        </div>

        <div className="line" />

        <div className="box-container">
          <p>
            Implementar um programa em <strong>Javascript</strong> para calcular
            o valor final de uma compra a partir do valor da compra e do cupom
            de desconto. <strong>O cupom diz quantos reais</strong> terá de
            desconto.
          </p>
        </div>

        <div className="main-content">
          <div className="box-cupom">
            <div className="input-group">
              <label htmlFor="valor-pedido">Informe o valor do pedido</label>
              <input
                placeholder="0"
                id="valor-pedido"
                onChange={(e) => setValorPedido(e.target.value)}
                value={valorPedido}
                type="text"
              />
            </div>

            <div className="input-group">
              <label htmlFor="valor-pedido">Informe o valor do cupom</label>
              <input
                placeholder="0"
                onChange={(e) => setValorCupom(e.target.value)}
                value={valorCupom}
                id="valor-pedido"
                type="text"
              />
            </div>

            <button onClick={calcularTotal}>Executar</button>
          </div>

          <p>Resultado: O total é R$ {total.toFixed(2)}</p>
        </div>
      </section>
    </>
  );
}
