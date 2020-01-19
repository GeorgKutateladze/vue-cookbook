<template>
  <div class="category">
      <div class="category-info">
        <div class="category-info__title">
          <p>{{ category.name }}</p>
        </div>
        <div class="category-info__options">
          <router-link 
            :to="{ name: 'add-recipe', params: {categoryId: category.id} }"
            class="category-info__edit">
            New
          </router-link>
          <div @click="deleteCategory" class="category-info__delete">Delete</div>
        </div>
      </div>
      <div class="category-carousel">
        <Recipe v-for="recipe in category.list" :key="recipe.id" :recipe="recipe" :categoryId="category.id" />
      </div>
  </div>
</template>

<script>
import Recipe from '@/components/Recipe'

export default {
  name: 'category',
  props: ['category'],
  components: {
    Recipe
  },
  computed: {
    recipes() {
      return this.$store.state.categories
    }
  },
  methods: {
    deleteCategory() {
      this.$store.dispatch('DELETE_CATEGORY', this.category.id)
    }
  }
}
</script>

<style scoped>
  .category {
    border-radius: 10px;
    transition: 0.5s;
    height: 280px;
    margin: 20px 0;
    display: flex;
    align-items: center;
  }
  .category:hover {
    transition: 0.5s;
    box-shadow: 0 5px 25px rgba(0,0,0,.2);
  }
  .category-info {
    height: 100%;
    width: 200px;
    min-width: 200px;
    box-shadow: 0 5px 25px rgba(0,0,0,.2);
    border-radius: 10px;
  }
  .category-info__title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .category-info__title {
    width: 100%;
    height: 50%;
    font-size: 20px;
    background-color: #272343;
    color: #FFF;
  }
  .category-info__options {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50%;
    transition: 0.5s;
  }
  .category-info__edit,
  .category-info__delete {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    transition: 0.5s;
    cursor: pointer;
    color: #272343;
    box-shadow: 0 5px 25px rgba(0,0,0,.2);
  }
  .category-info__edit:hover,
  .category-info__delete:hover {
    transition: 0.5s;
    transform: scale(1.1)
  }
  .category-carousel {
    height: 250px;
    display: flex;
    padding: 0 30px;
    justify-content: flex-start;
    align-items: center;
  }
  a {
    color: #272343;
    text-decoration: none;
  }
</style>
