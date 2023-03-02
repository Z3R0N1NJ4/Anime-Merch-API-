<template>
    <div>
      <h2>User List</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
          <button @click="editUser(user)">Edit</button>
          <button @click="deleteUser(user)">Delete</button>
        </li>
      </ul>
      <h2 v-if="editing">Edit User</h2>
      <form v-if="editing" @submit.prevent="saveUser">
        <label>Name:</label>
        <input v-model="editedUser.name" type="text" required>
        <label>Email:</label>
        <input v-model="editedUser.email" type="email" required>
        <button type="submit">Save</button>
        <button @click="cancelEdit">Cancel</button>
      </form>
      <h2 v-else>Create User</h2>
      <form v-else @submit.prevent="createUser">
        <label>Name:</label>
        <input v-model="newUser.name" type="text" required>
        <label>Email:</label>
        <input v-model="newUser.email" type="email" required>
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        users: [],
        editing: false,
        editedUser: {},
        newUser: {}
      }
    },
    created() {
      this.getUsers()
    },
    methods: {
      getUsers() {
        axios.get('/users')
          .then(response => {
            this.users = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      createUser() {
        axios.post('/users', this.newUser)
          .then(response => {
            this.users.push(response.data)
            this.newUser = {}
          })
          .catch(error => {
            console.log(error)
          })
      },
      editUser(user) {
        this.editing = true
        this.editedUser = { ...user }
      },
      saveUser() {
        axios.put(`/users/${this.editedUser.id}`, this.editedUser)
          .then(response => {
            const index = this.users.findIndex(user => user.id === this.editedUser.id)
            this.users.splice(index, 1, response.data)
            this.editing = false
            this.editedUser = {}
          })
          .catch(error => {
            console.log(error)
          })
      },
      cancelEdit() {
        this.editing = false
        this.editedUser = {}
      },
      deleteUser(user) {
        axios.delete(`/users/${user.id}`)
          .then(response => {
            const index = this.users.findIndex(u => u.id === user.id)
            this.users.splice(index, 1)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  