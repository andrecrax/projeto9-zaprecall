import React, { useState } from "react";
import styled from "styled-components";
import start from "../img/start.png";
import turnArrow from "../img/turnArrow.png";
import wrong from "../img/wrong.png";
import doubt from "../img/doubt.png";
import right from "../img/right.png";

export default function Flashcards({ i, question, answer, counter, setCounter }) {
const [step, setStep] = useState(0);
const [iconStart, setIconStart] = useState(start);
const [color, setColor] = useState("");
const [dataTest, setDataTest] = useState("");

function startQuestion() {
setStep(1);
}

function replyCard() {
setStep(2);
}

function answeredFlashcard(color) {
setStep(3);

if (color === "redAnswer") {
  setIconStart(wrong);
  setColor("#FF3030");
  setCounter(counter + 1);
  setDataTest("no-icon");
} else if (color === "orangeAnswer") {
  setIconStart(doubt);
  setColor("#FF922E");
  setCounter(counter + 1);
  setDataTest("partial-icon");
} else if (color === "greenAnswer") {
  setIconStart(right);
  setColor("#2FBE34");
  setCounter(counter + 1);
  setCounter(counter + 1);
  setDataTest("zap-icon");
}
}

return (
<div>
{step === 0 && (
<ClosedCardBox data-test="flashcard">
<h2 data-test="flashcard-text">PERGUNTA {i}</h2>
<img
data-test="play-btn"
src={start}
alt={start}
onClick={() => startQuestion()}
></img>
</ClosedCardBox>
)}

  {step === 1 && (
    <OpenQuestionBox data-test="flashcard">
      <h2 data-test="flashcard-text">{question}</h2>
      <img
        data-test="turn-btn"
        src={turnArrow}
        alt={turnArrow}
        onClick={() => replyCard()}
      />
    </OpenQuestionBox>
  )}

  {step === 2 && (
    <OpenAnswer data-test="flashcard">
      <h2 data-test="flashcard-text">{answer}</h2>
      <DivButtons>
        <Button
          data-test="no-btn"
          color="#FF3030"
          onClick={() => answeredFlashcard("redAnswer")}
        >
          Não lembrei
        </Button>
        <Button
          data-test="partial-btn"
          color="#FF922E"
          onClick={() => answeredFlashcard("orangeAnswer")}
        >
          Quase não lembrei
        </Button>
        <Button
          data-test="zap-btn"
          color="#2FBE34"
          onClick={() => answeredFlashcard("greenAnswer")}
        >
          Zap!
        </Button>
      </DivButtons>
    </OpenAnswer>
  )}

  {step === 3 && (
    <FinishedAnswer data-test="flashcard" color={color}>
      <h2 data-test="flashcard-text">PERGUNTA {i}</h2>
      <img data-test={dataTest} src={iconStart} alt={iconStart} />
    </FinishedAnswer>
  )}
</div>
);
}

const commonBoxStyles = {
  width: '70%',
  height: '65px',
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '25px',
  padding: '20px 20px',
  borderRadius: '5px',
  boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  };
  const ClosedCardBox = styled.div({
  ...commonBoxStyles,
  h2: {
  backgroundColor: '#ffffff',
  marginLeft: '10px',
  fontFamily: 'Recursive, sans-serif',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '19px',
  color: '#333333',
  cursor: 'default',
  },
  img: {
  backgroundColor: '#ffffff',
  marginRight: '10px',
  width: '20px',
  cursor: 'pointer',
  },
  });
  const OpenQuestionBox = styled.div({
  ...commonBoxStyles,
  position: 'relative',
  display:'wrap',
  minHeight: '131px',
  backgroundColor: '#ffffd5',
  h2: {
  background: '#ffffd5',
  fontFamily: 'Recursive',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '22px',
  color: '#333333',
  borderRadius: '5px',
  },
  img: {
  background: '#ffffd5',
  position: 'absolute',
  bottom: '15px',
  right: '15px',
  width: '20px',
  cursor: 'pointer',
  },
  });
  const OpenAnswer = styled.div({
  ...commonBoxStyles,
  display:'wrap',
  position: 'relative',
  minHeight: '131px',
  height:'auto',
  backgroundColor: '#ffffd5',
  flexDirection: 'column',
  h2: {
  background: '#ffffd5',
  fontFamily: 'Recursive',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '22px',
  color: '#333333',
  borderRadius: '5px',
  marginBottom: '30px',
  },
  });
  const DivButtons = styled.div({
  backgroundColor: '#ffffd5',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  });
  const Button = styled.button({
  width: '70px',
  height: '50px',
  fontFamily: 'Recursive',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  color: '#ffffff',
  borderRadius: '5px',
  padding: '10px',
  backgroundColor: props => props.color,
  border: props => props.cor,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  });
  const FinishedAnswer = styled.div({
  ...commonBoxStyles,
  h2: {
  backgroundColor: '#ffffff',
  marginLeft: '10px',
  fontFamily: 'Recursive, sans-serif',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '19px',
  textDecoration: 'line-through',
  color: props => props.color,
  cursor: 'default',
  },
  img: {
  backgroundColor: '#ffffff',
  marginRight: '10px',
  width: '20px',
  },
  });