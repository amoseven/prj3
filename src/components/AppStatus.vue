<template>
  <span :class="['badge', status.color]">{{ status.text }}</span>
</template>

<script>
import {reactive, computed} from 'vue'

export default {
  name: 'AppStatus',
  props: ['type'],
  setup (props) {
    const statuses = reactive({
      actived: {
        color: 'primary',
        text: 'Активен'
      },
      done: {
        color: 'primary',
        text: 'Завершён'
      },
      executed: {
        color: 'warning',
        text: 'Выполняется'
      },
      canceled: {
        color: 'danger',
        text: 'Отменён'
      }
    })

    const status = computed(() => statuses[props.type])

    return {
      status
    }
  }
}
</script>
