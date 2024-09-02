import "./index.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="comp-header">
      <header>
        <div className="img-frei">
          <img src="/assets/images/logo.svg" alt="" />
          <h3>React FreiS</h3>
        </div>
        <nav className="nav">
          <ul>
            <li>Inicio</li>
            <li>
              <Link to="/aboutUs">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
