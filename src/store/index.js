import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    GET_CATEGORIES(state, payload) {
      state.categories = payload
    },
    ADD_CATEGORY(state, payload) {
      state.categories.push(payload)
    },
    DELETE_CATEGORY(state, payload) {
      state.categories = state.categories.filter(cat => {
        return cat.id !== payload
      })
    },
    ADD_RECIPE(state, payload) {
      state.categories.forEach(arr => {
        if (arr.id == payload.categoryId) {
          arr.list.push(payload.newRecipe)
        }
      })
    },
    EDIT_RECIPE(state, payload) {
      const listIndex = state.categories.map(arr => arr.id).indexOf(payload.categoryId)
      const itemIndex = state.categories[listIndex].list.map(arr => arr.id).indexOf(payload.editedRecipe.id)
      state.categories[listIndex].list[itemIndex] = payload.editedRecipe
    },
    DELETE_RECIPE(state, payload) {
      state.categories.forEach(arr => {
        if (arr.id == payload.routeId) {
          arr.list = arr.list.filter(e => {
            return e.id !== payload.id
          })
        }
      })
    }
  },
  actions: {
    GET_CATEGORIES({commit}) {
      const db = JSON.parse(localStorage.getItem('db'))
      commit("GET_CATEGORIES", db)
    },
    ADD_CATEGORY({commit}, payload) {
      const db = JSON.parse(localStorage.getItem('db'))
      db.push(payload)
      localStorage.setItem('db', JSON.stringify(db))
      commit("ADD_CATEGORY", payload)
    },
    DELETE_CATEGORY({commit}, payload) {
      const db = JSON.parse(localStorage.getItem('db'))
      const cleanedDb = db.filter(cat => {
        return cat.id !== payload
      })
      localStorage.setItem('db', JSON.stringify(cleanedDb))
      commit("DELETE_CATEGORY", payload)
    },
    ADD_RECIPE({commit}, payload) {
      const db = JSON.parse(localStorage.getItem('db'))
      db.forEach(arr => {
        if (arr.id == payload.categoryId) {
          arr.list.push(payload.newRecipe)
        }
      })
      localStorage.setItem('db', JSON.stringify(db))
      commit('ADD_RECIPE', payload)
    },
    EDIT_RECIPE({commit}, payload) {
      const db = JSON.parse(localStorage.getItem('db'))
      const dbIndex = db.map(arr => arr.id).indexOf(payload.categoryId)
      const listIndex = db[dbIndex].list.map(arr => arr.id).indexOf(payload.editedRecipe.id)
      db[dbIndex].list[listIndex] = payload.editedRecipe
      localStorage.setItem('db', JSON.stringify(db))
      commit('EDIT_RECIPE', payload)
    },
    DELETE_RECIPE({commit}, payload) {
      const db = JSON.parse(localStorage.getItem('db'))
      db.forEach(arr => {
        if (arr.id == payload.routeId) {
          arr.list = arr.list.filter(e => {
            return e.id !== payload.id
          })
        }
      })
      localStorage.setItem('db', JSON.stringify(db))
      commit('DELETE_RECIPE', payload)
    }
  }
})
