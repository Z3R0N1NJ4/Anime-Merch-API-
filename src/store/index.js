import { createStore } from 'vuex'
import axios from 'axios'
const Animerch = "https://anime-merch-api.onrender.com/"
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, values) {
      state.user = values
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, values) {
      state.product = values
    },
    setSpinner(state, values) {
      state.showSpinner = values
    },
    setMessage(state, values) {
      state.message = values
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${Animerch}login`, payload);
      const {result, err} = await res.data;
      if (result) {
        context.commit('setUser', result);
      }else {
        context.commit('setMessage', err)
      }
    },
    async register(context, payload) {
      const res = await axios.post(`${Animerch}users`, payload)
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else {
        context.commit('setMessage', err);
      }
    },
    async fetchUsers(context, payload) {
      const res = await axios.get(`${Animerch}users`, payload);
      console.log(await res.data);
      if(res.data !== undefined) {
        context.commit('setUsers', res.data);
      }else {
        context.commit('setUsers', res.data);
      }
  },
  async fetchUserById(context, id) {
    const res = await axios.get(`${Animerch}users/${id}`);
    const {results, err} = await res.data;
    if(results) {
      context.commit('setUsers', results);
    }else {
      context.commit('setMessage', err);
    }
},
  async updateUser(context, payload) {
    const res = await axios.post(`${Animerch}user`, payload);
    const {msg, err} = await res.data;
    if(msg) {
      context.commit('setUser', msg);
    }else {
      context.commit('setUser', err);
    }
  },
  async fetchProducts(context){
    const res = await axios.get(`${Animerch}products`);
    console.log(await res.data)
    if(res.data !== undefined){
      context.commit('setProducts', res.data)
    } else {context.commit('setProducts', res.data);}
  },
  async addProducts(context, payload){
    const res = await axios.post(`${Animerch}products`, payload);
    const {result, err} = await res.data;
    if(result){
      context.commit('setMessage', result)
    } else {context.commit('setMessage', err);}
  },
},
  modules: {
  }
})












  