<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  mounted() {
    this.$store.dispatch("GET_CATEGORIES")

    if (!localStorage.getItem('db')) {
      localStorage.setItem('db', JSON.stringify([]))
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
