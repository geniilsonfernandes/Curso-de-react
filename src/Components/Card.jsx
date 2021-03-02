import React from "react";
import Box from "./box/Box";

const Card = (props) => {
  
  return (
    <section className="card__section mwfix">
      <div className="card">
        <Box content={props.infoTobox} />
      </div>
    </section>
  );
};

export default Card;
