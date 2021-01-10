import { MutationTree } from 'vuex'
import { AppState } from './state'
import { TodoItem } from '@/store/app/models'

export enum AppMutationTypes {
  SetLoading = 'SET_LOADING',
  SuccessGetTodos = 'SUCCESS_GET_TODOS',
}

export type AppMutations = {
  [AppMutationTypes.SetLoading](state: AppState, value: boolean): void;
  [AppMutationTypes.SuccessGetTodos](state: AppState, todos: TodoItem[]): void;
}

export const mutations: MutationTree<AppState> & AppMutations = {
  [AppMutationTypes.SetLoading] (state, value) {
    state.loading = value
  },
  [AppMutationTypes.SuccessGetTodos] (state, todos: TodoItem[]) {
    state.todos = [...state.todos, ...todos]
  }

}
