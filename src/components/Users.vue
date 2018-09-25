<template>
    <h1>Users</h1>
</template>

<script>
import RequestService from './request-services';
export default {
data(){
    return {
        reqService : null,
        users : [],
    }
},
methods : {

},
components : {
    
},
created() {
    this.reqService = new RequestService({
        baseUrl : '/https://sedcohrid.firebaseio.com/api/',
    })
    // axios.get('https://sedcohrid.firebaseio.com/api/students.json')
    // .then(response => {
    //     console.log(response.data);
    // })
    this.reqService.execute('https://sedcohrid.firebaseio.com/api/students.json')
    .then(response => {
        this.users = response.data;
        
    })
}
}
</script>

<style>

</style>
