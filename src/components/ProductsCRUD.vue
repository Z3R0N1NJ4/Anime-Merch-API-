<!-- <template>
 <div>
    <h1>Product List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="editProduct(product)">Edit</button>
            <button @click="deleteProduct(product)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h1 v-if="editing">Edit Product</h1>
    <form v-if="editing" @submit.prevent="updateProduct">
      <input type="hidden" v-model="editedProduct.id">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="editedProduct.name">
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="text" id="price" v-model="editedProduct.price">
      </div>
      <button type="submit">Save</button>
    </form>
    <h1 v-if="!editing">Create Product</h1>
    <form v-if="!editing" @submit.prevent="createProduct">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newProduct.name">
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="text" id="price" v-model="newProduct.price">
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Product_CRUD'
}
</script> -->




        