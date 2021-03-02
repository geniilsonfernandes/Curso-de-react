import React from "react";
import Produto from "./Produto";
import "./produtos.css";

const Produtos = (props) => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(e) {
    setCarregando(true);
    const response = await fetch(`
    https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}
    `);
    const dados = await response.json();
    setDados(dados);
    setCarregando(false);
  }
  return (
    <div className="produto__section mwfix">
      <button onClick={handleClick}> notebook </button>
      <button onClick={handleClick}> smartphone </button>
      <button onClick={handleClick}> tablet </button>
      <div className="produto">
        {carregando && <p> Carregando...</p>}
        {!carregando && dados && <Produto dados={dados}></Produto>}
      </div>
    </div>
  );
};

export default Produtos;
