import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/app'
import AboutUS from './pages/aboutUs'
import Exercicio1 from './pages/exercicio1'
import Exercicio2 from './pages/exercicio2'
import Exercicio3 from './pages/exercicio3'
import Exercicio4 from './pages/exercicio4'
export default function Navegacao() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/aboutUs" element={<AboutUS />}></Route>
      <Route path="/exercicio1" element={<Exercicio1 />}></Route>
      <Route path="/exercicio2" element={<Exercicio2 />}></Route>
      <Route path="/exercicio3" element={<Exercicio3 />}></Route>
      <Route path="/exercicio4" element={<Exercicio4 />}></Route>
    </Routes>
  </BrowserRouter>
  );
}
