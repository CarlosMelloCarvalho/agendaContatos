import {Link} from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoVoltar = styled(Link)`
display: block; 
border: none;
cursor: pointer;
color: #fff;
padding: 8px 30px;
border-radius: 9px;
width: 100px; 
height: 35px;
font-size: 14px;
background-color: ${variaveis.azul};

  &:hover {
    background-color: ${variaveis.amarelo};
   `
