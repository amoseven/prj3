import axios from 'axios'
import {createStore, createLogger} from 'vuex'

const DB = 'https://vue3-freelance-project-default-rtdb.firebaseio.com/tasks.json'
const store = createStore({
  plugins: [createLogger],
  state () {
    return {
      tasks: []
    }
  },
  getters: {
    getCounter (state) {
      return state.counter * 3
    },
    allTasks (state) {
      return state.tasks.sort((a, b) => a.deadline > b.deadline ? 1 : -1)
    },
    activedTasks (state) {
      return state.tasks.filter(task => task.status === 'actived')
    },
    activedTasksCount (state, getters) {
      return getters.activedTasks.length
    },
    getTask: (state) => id => {
      return state.tasks.find(task => task.id === id)
    }
  },
  mutations: {
    SET_TASKS (state, payload) {
      state.tasks = payload
    },
    ADD_TASK (state, task) {
      state.tasks.push(task)
    }
  },
  actions: {
    async get ({commit}) {
      try {
        const {data} = await axios.get(DB)
        if (data) {
          const tasks = Object.keys(data).map(key => {
            return {
              id: key,
              ...data[key]
            }
          })
          commit('SET_TASKS', tasks)
        } else {
          console.warn('НИЧЕГО НЕТ')
        }
      } catch (e) {
        console.error(e)
      }
    },
    async add ({commit}, payload) {
      try {
        const {data} = await axios.post(DB, payload)
        if (data) {
          commit('ADD_TASK', {...payload, id: data.name})
        } else {
          console.warn('НЕ СМОГ ДОБАВИТЬ ЗАДАЧУ')
        }
      } catch (e) {
        console.error(e)
      }
    },
    async setTaskStatus (context, payload) {
      const id = payload.id
      delete payload.id
      const task = {
        [id]: {...payload}
      }

      try {
        const {data} = await axios.patch(DB, task)
        if (data) {
          await context.dispatch('get')
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
})

export default store
