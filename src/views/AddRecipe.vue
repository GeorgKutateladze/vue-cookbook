<template>
    <div class="addRecipe">
        <h1>Your Recipe</h1>
        <form @submit.prevent="handleEvent">
            <label for="recipe-title">
                <input 
                    ype="text" 
                    name="recipe-title" 
                    autocomplete="off" 
                    placeholder="Your Recipe"
                    v-model="name">
            </label>
            <div class="steps" v-for="(step, index) in steps" :key='index'>
                <label for="recipe-step" class="label">
                    <input 
                        type="text" 
                        name="recipe-step" 
                        autocomplete="off" 
                        placeholder="Steps"
                        v-model="steps[index]">
                </label>
                <div class="material-icons delete" @click.prevent="deleteStep(step)">delete</div>
            </div>
            <div class="add-step">
                <label for="add-step">
                    <input 
                        type="text" 
                        name="add-step" 
                        autocomplete="off" 
                        placeholder="Step"
                        v-model="another"
                        @keydown.tab.prevent="addIng">
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "addRecipe",
    props: ['routeId'],
    data() {
        return {
            another: '',
            name: this.$route.params.name || '',
            steps: this.$route.params.steps || [],
            id: this.$route.params.id || Math.floor(Math.random()*100),
            categoryId: this.$route.params.categoryId
        }
    },
    methods: {
        addRecipe() {
            const newRecipe = {
                name: this.name,
                steps: this.steps,
                id: this.id
            }
            this.$store.dispatch('ADD_RECIPE', {newRecipe, categoryId: this.categoryId} )
            this.$router.push('/')
        },
        editRecipe() {
            const editedRecipe = {
                name: this.name,
                steps: this.steps,
                id: this.id
            }
            this.$store.dispatch('EDIT_RECIPE', {editedRecipe, categoryId: this.categoryId} )
            this.$router.push('/')
        },
        handleEvent() {
            if (this.$route.params.id) {
                return this.editRecipe()
            } else {
                return this.addRecipe()
            }
        },
        addIng(){
            if (this.another) {
                this.steps.push(this.another)
                this.another = ''
            }
        },
        deleteStep(step) {
            this.steps = this.steps.filter(s => {
                return s !== step
            })
        }
    }
}
</script>

<style scoped>
    .addRecipe {
        text-align: center;
    }
    h1 {
        margin: 10px 0;
        color: #272343;
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    input {
        width: 250px;
        height: 40px;
        margin: 10px auto;
        padding-left: 10px;
        outline: none;
        font-size: 16px;
    }
    button {
        width: 250px;
        height: 40px;
        margin: 10px auto;
        padding-left: 10px;
        outline: none;
        font-size: 16px;
    }
    .steps {
        position: relative;
    }
    .delete {
        position: absolute;
        top: 18px;
        right: 5px;
        color: #aaa;
        font-size: 20px;
        cursor: pointer;
    }
</style>