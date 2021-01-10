import { GetterTree } from 'vuex'
import { AuthState } from './state'
import { RootState } from '@/store'

export type AuthGetters = {}

export const getters: GetterTree<AuthState, RootState> & AuthGetters = {}
