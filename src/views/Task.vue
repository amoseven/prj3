<template>
  <div class="card" v-if="task">
    <h2>{{ task.name }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="task.status"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.deadline).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn"
              @click="setStatus('executed')"
              :disabled="task.status === 'executed'"
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
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['getTask']),
    id () {
      return this.$route.params.id || null
    },
    task () {
      return this.getTask(this.id)
    }
  },
  methods: {
    ...mapActions(['setTaskStatus']),
    async setStatus (status) {
      await this.setTaskStatus({
        ...this.task,
        status
      })
    }
  },
  components: {AppStatus}
}
</script>

<style scoped>
</style>
