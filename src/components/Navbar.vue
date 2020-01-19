<template>
    <div class="navbar">
        <router-link :to="{ name: 'home' }" class="logo">Vue Cookbook</router-link>
        <div class="add-category">
            <form @keypress.enter.prevent="addCategory">
                <label for="addCategory">
                    <input type="text" name="addCategory" placeholder="Add Category" autocomplete="off" v-model="input">
                </label>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            input: ''
        }
    },
    methods: {
        addCategory() {
            const newCategory = {
                id: Math.floor(Math.random()*10000),
                name: this.input,
                list: []
            }
            this.$store.dispatch('ADD_CATEGORY', newCategory)
            this.input = ''
        }
    }
}
</script>

<style scoped>
    .navbar {
        width: 100%;
        height: 60px;
        background-color: #272343;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo,
    .add-category {
        padding: 0 30px;
        font-size: 30px;
        color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a {
        color: #FFF;
        text-decoration: none;
    }
    input {
        font-size: 20px;
        padding-left: 10px;
        width: 180px;
        height: 35px;
        outline: none;
        border-radius: 10px;

    }
</style>