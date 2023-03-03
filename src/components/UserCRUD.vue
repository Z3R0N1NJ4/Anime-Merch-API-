<template lang="">
    <div>
        <h3 class="text-bg-info-center">Users</h3>
        <table class="table">           
             <thead>
              <tr>
                <th scope="col">UserID</th>
                <th scope="col">User Name</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col">cellNumber</th>
                <th scope="col">email</th>
                <th scope="col">Role</th>
                <th scope="col">UserProfile</th>
                <th scope="col">Join-date</th>
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user">
              <tr>
                <td>{{user.userID}}</td>
                <td>{{user.username}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.gender}}</td>
                <td>{{user.cellNumber}}</td>
                <td>{{user.email}}</td>
                <td>{{user.roleID}}</td>
                <td>{{user.userProfile}}</td>
                <td>{{user.joinDate}}</td>
              </tr>
            </tbody>
          </table>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import {computed} from '@vue/runtime-core';
export default {
    setup(){
        const store = useStore();
        store.dispatch("fetchUsers");
        let users = computed(() => store.state.users)
        return{
            users,
        }
    },
    name : 'user_com'
}
</script>
<style lang="">
    
</style>