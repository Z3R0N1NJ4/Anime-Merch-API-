<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct">
        <label>Name:</label>
        <input v-model="product.name" type="text" required>
        <label>Price:</label>
        <input v-model="product.price" type="number" required>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        product: {
          name: 'Add_Product',
          price: 0
        }
      }
    },
    methods: {
      addProduct() {
        axios.post('/products', this.product)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  