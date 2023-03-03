

    <!-- <div>
      <h2>Product</h2>
      <form @submit.prevent="addProduct">
        <label>Name:</label>
        <input v-model="product.name" type="text" required>
        <label>Price:</label>
        <input v-model="product.price" type="number" required>
        <button type="submit">Add Product</button>
      </form>
    </div> -->
  

<template>
    <h1>Products</h1>
  <div>
      <div class="card" style="width: 18rem;" v-for="product in products" :key="product">
          <img src="" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{product.prodName}}</h5>
            <p class="card-text">{{ product.prodDescription}}</p>
            <p class="card-text">{{ product.price}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
  
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default {
  setup(){
      const store = useStore();
      store.dispatch("fetchProducts");
      let products = computed(() => store.state.products)
      return{
          products,
      }
  },
  name : 'Add_Product',
}
</script>
<style lang="">
</style>