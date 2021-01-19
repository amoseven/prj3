<template>
  <header class="navbar" v-if="visible">
    <h3>Freelance</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/tasks">Все задачи</router-link>
      </li>
      <li>
        <router-link to="/new">Создать</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>
