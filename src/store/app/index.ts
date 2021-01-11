import {
  Module
} from 'vuex'
import { state, AppState } from './state'
import { mutations, AppMutations } from './mutations'
import { getters, AppGetters } from './getters'
import { actions, AppActions } from './actions'
import { RootState } from '@/store'
import { GenerateStoreType } from '@/store/util'
export * from './state'
export type AppStore = GenerateStoreType<Pick<RootState, 'APP'>, AppMutations, AppGetters, AppActions>;
export const AppModule: Module<AppState, RootState> = {
  state,
  mutations,
  actions,
  getters
}
