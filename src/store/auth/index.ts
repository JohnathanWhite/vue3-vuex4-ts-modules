import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module
} from 'vuex'
import { state, AuthState } from './state'
import { mutations, AuthMutations } from './mutations'
import { getters, AuthGetters } from './getters'
import { actions, AuthActions } from './actions'
import { RootState } from '@/store'
export * from './state'

export type AuthStore<S = AuthState> = Omit<VuexStore<S>,
  'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof AuthMutations, P extends Parameters<AuthMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<AuthMutations[K]>;
} & {
  getters: {
    [K in keyof AuthGetters]: ReturnType<AuthGetters[K]>
  };
} & {
  dispatch<K extends keyof AuthActions>(
    key: K,
    payload: Parameters<AuthActions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<AuthActions[K]>;
}

export const AuthModule: Module<AuthState, RootState> = {
  state,
  mutations,
  actions,
  getters
}
