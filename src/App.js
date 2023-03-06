import styled from 'styled-components';
import React, { useState } from "react";
import Header from './components/Header';
import Deck from "./components/Deck";
import Footer from './components/Footer';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <ConteinerConteudo>
      <Header/>
      <Box>
        <Deck counter={counter} setCounter={setCounter}/>
      </Box>
      <Footer counter={counter}/>
    </ConteinerConteudo>
  );
}

export default App;

const ConteinerConteudo = styled.div`
  width: 100%;
  height: 100%;
  background: #FB6B6B;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 `

const Box = styled.div`
  width: 371px;
  height: 100%;
  background: #FB6B6B;
`
