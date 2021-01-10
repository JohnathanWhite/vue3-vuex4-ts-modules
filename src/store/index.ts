import { createStore, createLogger } from 'vuex'

import {
  AuthModule,
  AuthStore,
  AuthState
} from '@/store/auth'

import {
  AppModule,
  AppStore,
  AppState
} from '@/store/app'

import { AppActionTypes } from '@/store/app/actions'
import { AuthActionTypes } from '@/store/auth/actions'

import { AppMutationTypes } from '@/store/app/mutations'
import { AuthMutationTypes } from '@/store/auth/mutations'

export type RootState = {
  app: AppState;
  auth: AuthState;
}

export const AllActionTypes = {
  app: AppActionTypes,
  auth: AuthActionTypes
}

export const AllMutationTypes = {
  app: AppMutationTypes,
  auth: AuthMutationTypes
}

export type Store =
  AuthStore<Pick<RootState, 'auth'>> &
  AppStore<Pick<RootState, 'app'>>

export const store = createStore({
  plugins:
    process.env.NODE_ENV === 'production'
      ? []
      : [createLogger()],
  modules: {
    app: AppModule,
    auth: AuthModule
  }
})

export function useStore (): Store {
  return store as Store
}

export default store
