<template lang="">
  <div>
      <h3 class="text-bg-info-center">Products</h3>
      <table class="table">            <thead>
            <tr>
              <th scope="col">productID</th>
              <th scope="col">productName</th>
              <th scope="col">productDescription</th>
              <th scope="col">productPrice</th>
              <th scope="col">stock</th>
              <th scope="col">imgURL</th>
            </tr>
          </thead>
          <tbody v-for="cust in users" :key="cust">
            <tr>
              <td>{{cust.productID}}</td>
              <td>{{cust.productName}}</td>
              <td>{{cust.productDescription}}</td>
              <td>{{cust.productPrice}}</td>
              <td>{{cust.stock}}</td>
              <td>{{cust.cellNumb}}</td>
            </tr>
          </tbody>
        </table>
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
    name: 'product_com'
}
</script>
<style lang="">
  
</style>



        