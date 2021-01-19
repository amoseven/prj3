<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="deadline">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary"
            @click.prevent="addTask"
            :disabled="!isValidTask">Создать
    </button>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'New',
  data () {
    return {
      name: '',
      deadline: null,
      description: ''
    }
  },
  computed: {
    isValidTask () {
      return this.deadline && this.name.length > 2 && this.description.length > 3
    }
  },
  methods: {
    ...mapActions,
    async addTask () {
      const task = {
        name: this.name,
        deadline: this.deadline,
        description: this.description,
        status: new Date(this.deadline) < new Date() ? 'canceled' : 'actived'
      }
      await this.$store.dispatch('add', task)
      await this.$router.push('/tasks')
    }
  }
}
</script>
