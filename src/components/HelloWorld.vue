<template>
  <div class="hello">
    <div>isLoading: {{ loading }}</div>
    <button @click="startGetTodos">Get Todos</button>
    <div v-for="todo of todos" :key="todo.id">{{ todo.title }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore, AllActionTypes } from '@/store'

export default defineComponent({
  name: 'HelloWorld',
  setup () {
    const store = useStore()
    const { app, auth } = store.state
    return {
      title: computed(() => auth.title),
      loading: computed(() => app.loading),
      todos: computed(() => app.todos),
      startGetTodos: () => store.dispatch(AllActionTypes.StartGetTodos, undefined, { root: true })
    }
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
