import React from "react";
import Perguntas from "./Perguntas";
import cards from "../cards";

export default function Deck({counter, setCounter}) {
  return (
    <>
      {cards.map((card, i) => (
        <Perguntas
          key={i}
          i={i + 1}
          question={card.question}
          answer={card.answer}
          counter={counter}
          setCounter={setCounter}
        />
      ))}
    </>
  );
}