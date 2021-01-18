<template>
  <header class="navbar" v-if="visible">
    <h3>Freelance</h3>
    <ul class="navbar-menu">
      <li><a href="/tasks">Все задачи</a></li>
      <li>
        <a href="/new">Создать</a>
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
