import styled from 'styled-components';
import logo from './img/logo_zap.png';


export default function Header(){
    return (
        <Topo>
        <ImagemLogo src={logo} alt="logo"></ImagemLogo>
        <Titulo>ZapRecall</Titulo>
        </Topo>
);
    }

const Topo = styled.header`
  display:flex;
  position: absolute;
  top: 8px;
  width: 371px;
  height: 102px;    
  text-align: center;
  justify-content:center;
`
const ImagemLogo = styled.img`
  width:52px;
  height:60px;
  padding-top:20px;
  padding-right:15px;
`
const Titulo = styled.h1`
  font-family: 'Righteous', cursive;
  font-size:36px;
  font-weight:400;
  color:white;
`