
import { useDispatch, useSelector } from 'react-redux'
import NovoCadastro from '../../components/AddContato'
import { RootReducer } from '../../store'
import * as S from './styles'
import { alterarTermo } from '../../store/reducers/Filtro'

const ListaDeCadastro = () => {
  const { itens } = useSelector((state: RootReducer) => state.atividade)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContato = () => {
    return itens.filter((item) =>
      item.nomeContato.toLowerCase().includes(termo.toLowerCase())
    )
  }

  const dispatch = useDispatch()

  return (
    <main>
      <div>
        <h4>Agenda de Contatos</h4>
        <div>
          <S.InputSearch
            type="text"
            placeholder="Busca contato"
            value={termo}
            onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />
        </div>
       
        <ul>
          {filtraContato().map((p) => (
            <li key={p.id}>
              <NovoCadastro
                id={p.id}
                nomeContato={p.nomeContato}
                emailContato={p.emailContato}
                phoneContato={p.phoneContato}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default ListaDeCadastro