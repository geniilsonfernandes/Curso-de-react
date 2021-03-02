import React from "react";
import Card from "./Card";
import Produtos from "./Produtos";

const click = () => {
  console.log("click");
};


const livros = [
  { subtitle: "aventura", title: "senhor dos aneis" },
  { subtitle: "ciencia", title: "uma breve historia do tempo", click: click },
  { subtitle: "muse", title: "knight of cydonia" },
  { title: "vastidão da noite", subtitle: "filme" },
  { title: "star trek", subtitle: "filme" },
  { title: "star war", subtitle: "filme" }
];




const main = (props) => {
  return (
    <main>
      <Card infoTobox={livros} />

      <div>
        <Produtos> </Produtos>
      </div>
    </main>
  );
};



export default main;
