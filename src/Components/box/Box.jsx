import React from "react";
import "./Box.css";

const Box = (props) => {
  const dados = props.content;

  console.log(dados);

  return (
    <>
      {dados.map((item) => (
        <div className="box__item" key={item.title} onClick={item.click}>
          <div className="box__photo"></div>
          <div className="box__text">
            <p>{item.subtitle}</p>
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Box;
