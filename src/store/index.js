// import { createStore } from 'vuex'

//   import Vue from 'vue'
//   import Vuex from 'vuex'
  
//   Vue.use(Vuex)
  
//   const store = new Vuex.Store({
//     state: {
//       count: 0
//     },
//     mutations: {
//       increment(state) {
//         state.count++
//       },
//       decrement(state) {
//         state.count--
//       }
//     },
//     actions: {
//       increment(context) {
//         context.commit('increment')
//       },
//       decrement(context) {
//         context.commit('decrement')
//       }
//     },
//     getters: {
//       getCount: state => {
//         return state.count
//       }
//     }
//   })
  
  // export default store
  // const state = {
  //   products: []
  // }
  // const mutations = {
  //   SET_PRODUCTS(state, products) {
  //     state.products = products
  //   }
  // }
  // const actions = {
  //   fetchProducts({ commit }) {
  //     // make an API call to fetch the products data
  //     axios.get('/api/products')
  //       .then(response => {
  //         commit('SET_PRODUCTS', response.data)
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // }
  // const getters = {
  //   getProducts(state) {
  //     return state.products
  //   }
  // }
  import { createStore } from 'vuex'
  import axios from 'axios';
  // import express  from 'express';
  const bStoreURL = "https://anime-merch-api.onrender.com"
  
  export default createStore({
    state: {
      users: null,
      user: null,
      products: null,
      product: null,
      showSpinner: true,
      message: null
  
    },
    mutations: {
      setUsers(state, values) {
        state.users = values
      },
      setUser(state, value) {
        state.user = value
      },
      setProducts(state, values) {
        state.products = values
      },
      setProduct(state, value) {
        state.products = value
      },
      setSpinner(state, value) {
        state.showSpinner = value
      },
      setMessage(state, value) {
        state.message = value
      },
      clearUsers(state) {
        state.users = null
      },
      clearUser(state) {
        state.user = null
      }
    },
    actions: {
      async login(context, payload){
        const res = await axios.post(`${bStoreURL}login`, payload);
        const {result, err} = await res.data;
        if (result) {
          context.commit('setUser', result);
        }
        else {
          context.commit('setMessage', err);
        }
      },
  
      async register(context, payload){
        let res = await axios.post(`${bStoreURL}register`, payload);
        let {msg, err} = await res.data;
        if(msg){
          context.commit('setMessage', msg);
        }
        else {
          context.commit('setMessage', err);
        }
      },
  
      async adminGet({commit}, error){
        if(error) {
          console.error(error);
        } else{
          const { data } = await axios.get('/users') //replace '/admin' with your API endpoint for getting admin data
          commit('setItems', data.items);
        }
      },
      async adminCreateUser({dispatch}, user, error){
        if(error){
          console.error(error);
        } else {
          await axios.post('/register', user) //replace '/admin' with your API endpoint for creating an item
          dispatch('register')
        }
      }, 
      async adminUpdateUser({dispatch}, user, error){
        if(error){
          console.error(error);
        } else {
          await axios.post(`/user/:id/${user.id}`, user) //replace '/admin' with your API endpoint for creating an item
          dispatch('admin')
        }
      }, 
      async adminDeleteUser({dispatch}, user, error){
        if(error){
          console.error(error);
        } else {
          await axios.delete(`/admin/${user.id}`) //replace '/admin' with your API endpoint for deleting an item
          dispatch('admin')
        }
      }
    }
  })