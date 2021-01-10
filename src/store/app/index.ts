import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module
} from 'vuex'
import { state, AppState } from './state'
import { mutations, AppMutations } from './mutations'
import { getters, AppGetters } from './getters'
import { actions, AppActions } from './actions'
import { RootState } from '@/store'

export * from './state'

export type AppStore<S = AppState> = Omit<VuexStore<S>,
  'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof AppMutations, P extends Parameters<AppMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<AppMutations[K]>;
} & {
  getters: {
    [K in keyof AppGetters]: ReturnType<AppGetters[K]>
  };
} & {
  dispatch<K extends keyof AppActions>(
    key: K,
    payload: Parameters<AppActions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<AppActions[K]>;
}

export const AppModule: Module<AppState, RootState> = {
  state,
  mutations,
  actions,
  getters
}
