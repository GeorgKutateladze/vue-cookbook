<template>
    <div class="recipe">
        <div class="card">
            <div class="title">
                <p>{{ recipe.name }}</p>
            </div>
            <div class="steps">
                <span v-for="(step, index) in recipe.steps" :key="index" class="step">
                    <span class='index'>{{ index+1 }}</span>. <span>{{ step }}</span>
                </span>
            </div>
            <div class="card-options">
                <router-link 
                    :to="{ 
                        name: 'add-recipe',
                        params: {
                            name: recipe.name, 
                            steps: recipe.steps, 
                            id: recipe.id,
                            categoryId: categoryId
                        } 
                    }"
                    class="edit">
                    <p>Edit</p>
                </router-link>
                <div @click.prevent="deleteRecipe" class="delete">
                    <p>Delete</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'recipe',
    props: ['recipe', 'categoryId'],
    data() {
        return {
                
        }
    },
    methods: {
        deleteRecipe() {
            const recipe = {id: this.recipe.id, routeId: this.categoryId}
            this.$store.dispatch('DELETE_RECIPE', recipe)
        }
    }
}
</script>

<style scoped>
    .recipe {
        padding: 0 20px;
    }
    .card {
        width: 200px;
        height: 250px;
        border: 1px solid black;
        border-radius: 10px;
    }
    .title {
        width: 100%;
        height: 20%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #272343;
        color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .steps {
        width: 100%;
        height: 70%;
    }
    .step {
        padding: 5px 0 0 10px;
        display: inline; 
    }
    .card-options {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        border-top: 1px solid #272343;
        border-radius: 0 0 10px 10px;
        transition: 0.2s;
    }
    .delete,
    .edit {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#272343;
        cursor: pointer;
    }
    .edit {
        border-right: 1px solid #272343;
    }
    .index {
        color: crimson;
    }
    a {
        color:#272343;
        text-decoration: none;
    }
</style>