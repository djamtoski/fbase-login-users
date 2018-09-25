<template>
    <div class="card">
  <img :src="user.image">
  <div class="container">
    <h4><b>{{user.firstname}}</b></h4> 
    <h4><b>{{user.lastname}}</b></h4> 
    <p>{{user.description}}</p> 
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods : {

    },
    props : [
      'user'
    ]
}
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
    padding: 3px 4px 3px 4px;
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
    border-radius: 5px 5px 0 0;
    width: 20%;
    height: 20%;
}
</style>
