<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  async mounted () {
    await this.$store.dispatch('get')
  },
  components: {
    TheNavbar
  }
}
</script>

<style>

</style>
