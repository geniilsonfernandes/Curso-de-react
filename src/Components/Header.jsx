import React from "react";
import "./Header.css";
import Nav from "./Nav";

const Header = (props) => {
  const { titulo } = props;
  let [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({nome:'andre', idade:28})
  
  const ativaBotao = () => {
    setAtivo(!ativo);
    setDados({...dados, faculdade: 'nao'})
  };

  return (
    <header>
      <Nav />
      <div className="cover">
        <h1>{titulo}</h1>
        
        <button  disabled={false} onClick={ativaBotao}>
          {ativo ? "botao ativo" : "inativo"}
        </button>

        <div>
          <p>{dados.nome}</p>  
          <p>{dados.idade}</p>  
          <p>{dados.faculdade}</p>  
        </div>
      </div>
    </header>
  );
};

export default Header;
