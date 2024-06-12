import styled from 'styled-components'
import variaveis from '../../styles/variaveis'


export const Formulario = styled.form`
  display: block;
  max-width: 50%;
  margin-top: 20px;
  gap: 20px;
  margin-bottom: 60px;

`

export const Button = styled.button`

  background: ${variaveis.verde};
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  margin: 10px;
  padding: 8px;
  border-radius: 9px;
  width: 78px; 
  height: 35px; 

  &:hover {
    background: ${variaveis.verdeHover};
  }
`

export const CancelButton = styled(Button)`
  background-color: ${variaveis.vermelho};
  width: 78px; 
  height: 35px; 
  &:hover {
    background: ${variaveis.vermelhoHover};
  }

  }
`

export const InputNome = styled.input`
display: flex;
align-self: center;
  padding: 8px;
  border: 1px solid ${variaveis.cinzaLight};
  border-radius: 4px;
  margin: 10px;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
`

export const InputSearch = styled(InputNome)`
  width: 100%;
  margin-top: 8px;
  color: ${variaveis.cinza};
  margin-bottom: 10px;
`

export const InputTelefone = styled(InputNome)`
  width: 70%;
`

export const InputEmail = styled(InputNome)`
  width: 100%;
`