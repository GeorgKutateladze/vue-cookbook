<template>
  <div class="home">
    <Category v-for="category in categories" :key="category.id" :category="category"/>
  </div>
</template>

<script>
import Category from '@/components/Category'

export default {
  name: 'home',
  components: {
    Category
  },
  computed: {
    categories() {
      return this.$store.state.categories
    }
  }
}
</script>

<style scoped>
.home {
  width: 95%;
  margin: 0 auto;
}
</style>
