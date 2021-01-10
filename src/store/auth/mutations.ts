import { MutationTree } from 'vuex'
import { AuthState } from './state'

export enum AuthMutationTypes {
  SetTitle = 'SET_TITLE'
}

export type AuthMutations = {
  [AuthMutationTypes.SetTitle](state: AuthState, title: string): void;
}

export const mutations: MutationTree<AuthState> & AuthMutations = {
  [AuthMutationTypes.SetTitle] (state, title) {
    state.title = title
  }
}
