import React from "react";
import { Link } from "react-router-dom";
import { projetosPorSemana } from "../data/semana";

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      {Object.entries(projetosPorSemana).map(([semana, atividades]) => (
        <div key={semana} style={{ marginBottom: 24 }}>
          <h2>{semana}</h2>
          <ul>
            {atividades.length === 0 ? (
              <li><em>Sem atividades cadastradas</em></li>
            ) : (
              atividades.map((atv) => (
                <li key={atv.caminho}>
                  <Link to={atv.caminho}>{atv.titulo}</Link>
                </li>
              ))
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
