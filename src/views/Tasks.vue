<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
  <template v-else>

    <h3 class="text-white">Всего активных задач: {{ counter }}</h3>

    <!--    <div class="card">
          <AppStatus v-for="status in statuses" :key="status" :type="status"/>
        </div>
    -->

    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.name }}
        <AppStatus :type="task.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(task.deadline).toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <router-link :to="'/task/' + task.id">
        <button class="btn primary">Посмотреть</button>
      </router-link>

    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  setup () {
    const store = useStore()
    const tasks = computed(() => store.getters.allTasks)
    const counter = computed(() => store.getters.activedTasksCount)
    const statuses = computed(() => store.getters.allStatusesArray)

    console.log({statuses})

    return {
      tasks,
      counter,
      statuses
    }
  },
  components: {AppStatus}
}
</script>
