import {Link} from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoAdd = styled(Link)`
display: flex;
align-self: center;
border: none;
cursor: pointer;
color: #fff;
padding: 8px;
border-radius: 9px;
width: 170px; 
height: 35px;
font-size: 14px;
background-color: ${variaveis.verde};


  &:hover {
    background-color: ${variaveis.verdeHover};
   `

