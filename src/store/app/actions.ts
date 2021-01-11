import { ActionTree } from 'vuex'
import { AppMutations, AppMutationTypes } from './mutations'
import { AppState } from './state'
import { RootState } from '@/store'
import axios from 'axios'
import { GenerateActionAugments } from '@/store/util'

type ActionAugments = GenerateActionAugments<AppState, AppMutations>

export enum AppActionTypes {
  StartGetTodos = 'START_GET_TODOS'
}

export type AppActions = {
  [AppActionTypes.StartGetTodos](context: ActionAugments): void;
}

export const actions: ActionTree<AppState, RootState> & AppActions = {
  async [AppActionTypes.StartGetTodos] ({ commit }) {
    try {
      commit(AppMutationTypes.SetLoading, true)
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
      commit(AppMutationTypes.SuccessGetTodos, data)
      commit(AppMutationTypes.SetLoading, false)
    } catch (err) {

    }
  }
}
