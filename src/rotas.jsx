import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './pages/app'
import AboutUS from './pages/aboutUs'
import Exercicio1 from './pages/exercicio-1'
import Exercicio2 from './pages/exercicio2'
import Exercicio3 from './pages/exercicio3'
import Exercicio4 from './pages/exercicio4'
import Exercicio5 from './pages/exercicio5'
import Exercicio6 from './pages/exercicio6'
import Exercicio7 from './pages/exercicio7'
import Exercicio8 from './pages/exercicio8'
import Exercicio9 from './pages/exercicio9'
import Exercicio10 from './pages/exercicio10'
import Exercicio11 from './pages/exercicio11'
export default function Navegacao() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/aboutUs" element={<AboutUS />}></Route>
      <Route path="/exercicio-1" element={<Exercicio1 />}></Route>
      <Route path="/exercicio2" element={<Exercicio2 />}></Route>
      <Route path="/exercicio3" element={<Exercicio3 />}></Route>
      <Route path="/exercicio4" element={<Exercicio4 />}></Route>
      <Route path="/exercicio5" element={<Exercicio5 />}></Route>
      <Route path="/exercicio6" element={<Exercicio6 />}></Route> 
      <Route path="/exercicio7" element={<Exercicio7 />}></Route> 
      <Route path="/exercicio8" element={<Exercicio8 />}></Route> 
      <Route path="/exercicio9" element={<Exercicio9 />}></Route> 
      <Route path="/exercicio10" element={<Exercicio10 />}></Route>  
      <Route path="/exercicio11" element={<Exercicio11 />}></Route>  
    </Routes>
  </BrowserRouter>
  );
}
