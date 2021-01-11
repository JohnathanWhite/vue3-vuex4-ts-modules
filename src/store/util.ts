import { CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex'

type _FuncMap = { [k: string]: (...args: any) => any };
export type GenerateStoreType<S, M extends _FuncMap, G extends _FuncMap, A extends _FuncMap> =
  Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'>
  & {
  commit<K extends keyof M, P extends Parameters<M[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<M[K]>;
}
  & {
  getters: {
    [K in keyof G]: ReturnType<G[K]>
  };
}
  & {
  dispatch<K extends keyof A>(
    key: K,
    payload: Parameters<A[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<A[K]>;
};
