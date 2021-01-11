import { createStore, createLogger } from 'vuex'

import {
  AppModule,
  AppStore,
  AppState
} from '@/store/app'
import { AppActionTypes } from '@/store/app/actions'
import { AppMutationTypes } from '@/store/app/mutations'

import {
  AuthModule,
  AuthStore,
  AuthState
} from '@/store/auth'
import { AuthActionTypes } from '@/store/auth/actions'
import { AuthMutationTypes } from '@/store/auth/mutations'

export type RootState = {
  APP: AppState;
  AUTH: AuthState;
}

export const AllActionTypes = {
  APP: AppActionTypes,
  AUTH: AuthActionTypes
}

export const AllMutationTypes = {
  APP: AppMutationTypes,
  AUTH: AuthMutationTypes
}

export type Store =
  AuthStore &
  AppStore

export const store = createStore({
  plugins:
    process.env.NODE_ENV === 'production'
      ? []
      : [createLogger()],
  modules: {
    APP: AppModule,
    AUTH: AuthModule
  }
})

export function useStore (): Store {
  return store as Store
}

export default store
