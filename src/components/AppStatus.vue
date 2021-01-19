<template>
  <span :class="['badge', status.color]">{{ status.text }}</span>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'AppStatus',
  props: ['type'],
  setup (props) {
    const store = useStore()

    const statuses = computed(() => store.getters.allStatuses)
    const status = computed(() => statuses.value[props.type])

    return {
      status
    }
  }
}
</script>
