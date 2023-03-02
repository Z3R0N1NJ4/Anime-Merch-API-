<template>
  <br>
  <h1>products</h1>
    <div>
    <input v-model="filterText" type="text" placeholder="Search...">
    <ul>
      <li v-for="item in filteredItems" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
  <br>
  <h2>Card</h2>

<div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h3><b>John Doe</b></h3> 
    <p>Architect & Engineer</p> 
  </div>cd
</div>

  
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'tyvon', image: 'https://i.postimg.cc/8zTZbs91/51-Db-Sz-QTAKL.jpg' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'John' },
        { id: 6, name: 'Mishaine' },
        { id: 7, name: 'sakhe' },
        ],
      filterText: '',
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.filterText.toLowerCase())
      ).sort((a, b) => a.name.localeCompare(b.name))
    },
  },
}
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
