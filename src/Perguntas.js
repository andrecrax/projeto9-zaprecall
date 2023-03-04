import styled from 'styled-components';
import cards from './decks';
import seta from './img/seta.png';
import circle_arrow from './img/circle_arrow.png';
import React, { useState } from "react";

function ClickableCard() {
    const [active, setActive] = useState(false);
  
    const handleClick = () => {
      setActive(!active);
    };
}
function Perguntas() {
    const [activeIndex, setActiveIndex] = useState(-1);
  
    const handleClick = index => {
      setActiveIndex(index === activeIndex ? -1 : index);
    };
  
    return (
      <ConteinerCard>
        {cards.map((card, index) => (
          <CardBox
            key={index}
            active={activeIndex === index}
            onClick={() => handleClick(index)}
          >
            <PerguntaCard>
              {activeIndex === index ? card.resposta : `Pergunta ${index + 1}`}
            </PerguntaCard>
            <ImagemCardBox src={activeIndex === index ? circle_arrow : seta} alt="seta" />
          </CardBox>
        ))}
      </ConteinerCard>
    );
  }
  

export default Perguntas;

const PerguntaCard = styled.div`
    font-family:'Recursive', sans-serif;
    font-size:16px;
    font-weight:700;
    color:#333333;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
`

const CardBox = styled.div`
  width: 300px;
  height: ${props => (props.active ? "300px" : "65px")};
  background-color: #FFFFFF;
  margin: 0 auto;
  margin-bottom: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;


const ImagemCardBox = styled.img`
    width:20px;
    height:23px;
    padding-right: 15px;
`

const ConteinerCard = styled.div`
    margin-top: 120px;
`