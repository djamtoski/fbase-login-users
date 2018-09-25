<template>
    <div class="user-list">
        <h1>Users</h1>
        <div class="list">
            <user-card
            v-for="(user,index) in users" :key="index" :user="user">

            </user-card>
        </div>
    </div>
</template>

<script>
import UsersModel from '../models/Usersmodel';
import dataService from './data-service';
import userCard from './user-card';
export default {
data(){
    return {
        users : [],
    }
},
methods : {

},
components : {
    userCard
},
created() {
    dataService.get('students.json')
    .then((response) =>{
        this.users = response.data;
        console.log(this.users);
    }) 
}
}
</script>

<style>

</style>
