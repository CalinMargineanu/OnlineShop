import { createStore } from 'vuex'

export default createStore({

  state: {
    count: [2, 1, 3],
    message: 'Js',
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: true },
      { id: 2, text: '...', done: true },
    ]
  },

  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoByID: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }

  },

  mutations: {
    increment (state) {
      state.count++
    }
  },

  actions: {
  },

  modules: {
  }
})

