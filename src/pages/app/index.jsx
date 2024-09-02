import "./index.scss";
import Header from "../../components/header";
import Cards from "../../components/cards";
function App() {
  return (
    <div className="pagina-freis">
      <Header />
      <div className="content">
        <p>
          <strong>Escolha um treino...</strong>
        </p>
        <div className="exercicios">
          <Cards
            link="/exercicio-1"
            titulo="Cupom de desconto"
            nome="Exercicio 1"
            background="#ffce37"
          />

          <Cards
            link="/exercicio2"
            titulo="Converter Kg/gramas"
            nome="Exercicio 2"
            background="#b3ff37"
          />
          <Cards
            link="/exercicio3"
            titulo="Valor total por quantidade"
            nome="Exercicio 3"
            background="#37fff3"
          />
          <Cards
            link="/exercicio4"
            titulo="Treino de Leitura"
            nome="Exercicio 4"
            background="#f75f19"
          />
          <Cards
            link="/exercicio5"
            titulo="Treino média notas"
            nome="Exercicio 5"
            background="#cb37ff"
          />
          <Cards
            link="/exercicio6"
            titulo="Salário líquido"
            nome="Exercicio 6"
            background="#f75f19"
          />
          <Cards
            link="/exercicio7"
            titulo="Cores primarias"
            nome="Exercicio 7"
            background="#37FFAB"
          />
          <Cards
            link="/exercicio8"
            titulo="Temperatura"
            nome="Exercicio 8"
            background="#151515"
          />
          <Cards
            link="/exercicio9"
            titulo="Sorveteria"
            nome="Exercicio 9"
            background="#741818"
          />
          <Cards
            link="/exercicio10"
            titulo="IMC"
            nome="Exercicio 10"
            background="#8f0a88"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
