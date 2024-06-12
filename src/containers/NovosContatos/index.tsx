import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { cadastrar } from '../../store/reducers/atividades'
import * as S from './styles'
import Contato from '../../models/Contatos'


const ListaNovoCadastro = () => {
  useSelector((state: RootReducer) => state.atividade)
  useSelector((state: RootReducer) => state.filtro)

  const navigate = useNavigate()



  const dispatch = useDispatch()
  const [nomeContato, setNomeContato] = useState('')
  const [emailContato, setEmailContato] = useState('')
  const [phoneContato, setPhoneContato] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const cadastroParaAdicionar: Contato = {
      id: 0,
      emailContato,
      phoneContato,
      nomeContato
    }
    dispatch(cadastrar(cadastroParaAdicionar))
    limparCampos()
    navigate('/')
  }

  const limparCampos = () => {
    setNomeContato('')
    setEmailContato('')
    setPhoneContato('')
  }

  return (
    <main>
      
        <div>
            <h4>Novo Contato</h4>
          <S.Formulario onSubmit={cadastrarContato}>
            <S.InputNome
              value={nomeContato}
              required
              onChange={({ target }) => setNomeContato(target.value)}
              type="text"
              placeholder="Nome completo"
            />
            <S.InputEmail
              value={emailContato}
              required
              onChange={({ target }) => setEmailContato(target.value)}
              type="email"
              placeholder="E-mail"
            />
            <S.InputTelefone
              value={phoneContato}
              required
              onChange={({ target }) => setPhoneContato(target.value)}
              type="Tel"
              placeholder="(XX) 9XXXX-XXXX"
            />
            <S.Button type="submit">Salvar</S.Button>
            <S.CancelButton type="button" onClick={limparCampos}>
              Cancelar
            </S.CancelButton>
          </S.Formulario>
        </div>
    </main>
  )
}

export default ListaNovoCadastro