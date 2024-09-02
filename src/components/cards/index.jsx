import "./index.scss";
import { Link } from "react-router-dom";
import React from "react";

export default function Cards(props) {
    const estilo = {
      width: 60,
      height: 60, 
      backgroundColor: props.background,
      borderRadius: 15,
    }

  return (
    <div>
      <Link to={props.link}>
        <div className="leitura">
          <div style={estilo}></div>
          <h4>{props.titulo}</h4>
          <span>{props.nome}</span>
        </div>
      </Link>
    </div>
  );
}
