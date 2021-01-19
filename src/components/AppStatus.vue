<template>
  <span :class="['badge', status.color]">{{ status.text }}</span>
</template>

<script>
export default {
  name: 'AppStatus',
  props: ['type'],
  computed: {
    status () {
      return this.statuses[this.type]
    }
  },
  data () {
    return {
      statuses: {
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
      }
    }
  }
}
</script>

<style scoped>

</style>
