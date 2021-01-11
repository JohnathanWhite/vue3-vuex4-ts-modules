import {
  Module
} from 'vuex'
import { state, AuthState } from './state'
import { mutations, AuthMutations } from './mutations'
import { getters, AuthGetters } from './getters'
import { actions, AuthActions } from './actions'
import { RootState } from '@/store'
import { GenerateStoreType } from '@/store/util'
export * from './state'
export type AuthStore = GenerateStoreType<Pick<RootState, 'AUTH'>, AuthMutations, AuthGetters, AuthActions>;
export const AuthModule: Module<AuthState, RootState> = {
  state,
  mutations,
  actions,
  getters
}
