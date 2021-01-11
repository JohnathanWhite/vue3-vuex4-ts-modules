import { ActionTree } from 'vuex'
import { AuthMutations } from './mutations'
import { AuthState } from './state'
import { RootState } from '@/store'
import { GenerateActionAugments } from '@/store/util'

type ActionAugments = GenerateActionAugments<AuthState, AuthMutations>

export enum AuthActionTypes {}
export type AuthActions = {}
export const actions: ActionTree<AuthState, RootState> & AuthActions = {}
