<template>
  <h3 class="text-white center" v-if="!id">
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
  <div class="card" v-else-if="task">
    <h2>{{ task.name }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="task.status"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.deadline).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn"
              @click="setStatus('pending')"
              :disabled="task.status === 'pending'"
      >Взять в работу
      </button>
      <button class="btn primary"
              @click="setStatus('done')"
              :disabled="task.status === 'done'"
      >Завершить
      </button>
      <button class="btn danger"
              @click="setStatus('canceled')"
              :disabled="task.status === 'canceled'"
      >Отменить
      </button>
    </div>
  </div>

</template>

<script>
import AppStatus from '../components/AppStatus'
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const route = useRoute()

    const id = computed(() => route.params.id || null)
    const task = computed(() => store.getters.getTask(id.value))

    function setStatus (status) {
      store.dispatch('setTaskStatus', {
        ...task.value,
        status
      })
    }

    return {
      id,
      task,
      setStatus
    }
  },
  components: {AppStatus}
}
</script>

<style scoped>
</style>
