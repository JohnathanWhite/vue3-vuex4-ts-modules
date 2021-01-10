import { ActionContext, ActionTree } from 'vuex'
import { AuthMutations, AuthMutationTypes } from './mutations'
import { AuthState } from './state'
import { RootState } from '@/store'

export enum AuthActionTypes {

}

type ActionAugments = Omit<ActionContext<AuthState, RootState>, 'commit'> & {
  commit<K extends keyof AuthMutations>(
    key: K,
    payload: Parameters<AuthMutations[K]>[1]
  ): ReturnType<AuthMutations[K]>;
}

export type AuthActions = {}

export const actions: ActionTree<AuthState, RootState> & AuthActions = {}
