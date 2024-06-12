
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import   Contato from '../../models/Contatos'
type AtividadeState = {
  itens: Contato []
}

const initialState: AtividadeState = {
  itens: [
    {
      nomeContato: 'João Paulo Jacob',
      emailContato: 'jpjacob@hotmail.com',
      phoneContato: '(11)94456-9769',
      id: 1
    },
    {
      
      nomeContato: 'Ivone Mello',
      emailContato: 'ivone_mello@gmail.com',
      phoneContato: '(19)92256-9864',
      id: 2
    },
    {
      
      nomeContato: 'Sheila Castro',
      emailContato: 'SVCastro@hotmail.com',
      phoneContato: '(11)9349-5412',
      id: 3,
    },
    {
      
      nomeContato: 'Henrique Carvalho',
      emailContato: 'hencarsilva@gmail.com',
      phoneContato: '(21)9876-5432',
      id: 4,
    }
  ]
}

const atividadesSlice = createSlice({
  name: 'atividades',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (atividade) => atividade.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (p) => p.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const cadastroJaExiste = state.itens.some(
        (atividade) =>
          atividade.nomeContato.toLowerCase() ===
          action.payload.nomeContato.toLowerCase()
      )
      if (cadastroJaExiste) {
        alert('Já existe um contato com este nome')
      } else {
        const novoId =
          state.itens.length > 0
            ? state.itens[state.itens.length - 1].id + 1
            : 1
        state.itens.push({ ...action.payload, id: novoId })
      }
    },
  }
})

export const { remover, editar, cadastrar } = atividadesSlice.actions
export default atividadesSlice.reducer