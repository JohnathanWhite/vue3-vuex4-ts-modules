import { TodoItem } from '@/store/app/models'

export type AppState = {
  loading: boolean;
  todos: TodoItem[];
}

export const state: AppState = {
  loading: false,
  todos: []
}
