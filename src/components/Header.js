import styled from 'styled-components';
import logo from '../img/logo_zap.png';


export default function Header(){
    return (
        <Topo>
        <img src={logo} alt="logo"></img>
        <h1>ZapRecall</h1>
        </Topo>
);
    }

    const Topo = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 371px;
    height: 102px;
    & img {
      margin-left:65px;
      display: inline-block;
      vertical-align: middle;
      width:52px;
      height:60px;
    }
    & h1 {
      margin-left:20px;
      font-family: 'Righteous', cursive;
      font-size:36px;
      font-weight:400;
      color:white;
    }
  `