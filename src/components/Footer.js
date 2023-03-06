import React from "react";
import styled from "styled-components";
import cards from "../cards";

export default function Footer({ counter }) {
  return (
    <ConteinerFooter>
      <Results data-test="footer">{counter}/{cards.length} CONCLUÍDOS</Results>
    </ConteinerFooter>
  );
}

const ConteinerFooter = styled.div`
  height: 70px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const Results = styled.h2`
  font-weight: 400;
  background-color: #ffffff;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  text-align: center;
  color: #333333;
`;

