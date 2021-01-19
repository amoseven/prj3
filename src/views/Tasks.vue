<template>
  <div class="card line">
    <div>
      <span :class="['badge']" @click="setStatus('')">Все задачи</span>
      <AppStatus v-for="(status, index) in statuses"
                 :key="index+1"
                 @click="setStatus(status)"
                 :type="status"/>
    </div>
    <span><strong>Задач: {{ tasks2.length }}</strong></span>
  </div>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
  <template v-else>

    <h3 class="text-white">Всего активных задач: {{ counter }}</h3>

    <div class="card" v-for="task in tasks2" :key="task.id">
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
import {ref, computed} from 'vue'
import {useStore} from 'vuex'

export default {
  setup () {
    const store = useStore()
    const tasks = computed(() => store.getters.allTasks)
    const counter = computed(() => store.getters.activedTasksCount)
    const statuses = computed(() => store.getters.allStatusesArray)

    const status1 = ref('')
    const tasks2 = computed(() => store.getters.taskByType(status1.value))

    const setStatus = (status) => {
      status1.value = status
    }
    console.log(tasks2)

    return {
      tasks,
      counter,
      statuses,
      status1,
      tasks2,
      setStatus
    }
  },
  components: {AppStatus}
}
</script>

<style scoped>
.badge {
  margin-left: 10px;
  cursor: pointer
}

.line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
