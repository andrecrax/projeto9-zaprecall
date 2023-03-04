import styled from 'styled-components';
import Header from './Header';
import Perguntas from './Perguntas';

function App() {
  return (
    <ConteinerConteudo>
      <Box>
        <Header/>
        <Perguntas/>
      </Box>
    </ConteinerConteudo>
  );
}

export default App;

const ConteinerConteudo = styled.div`
  width: 100%;
  height: 100%;
  background: #6C7A89;
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
