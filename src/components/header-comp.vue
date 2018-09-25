<template>
<div>
<ul>
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/users">Users</router-link></li>
  <li><router-link to="/">Comments</router-link></li>
  <div v-if="loggedIn">
  <li @click="logOut"><router-link to="/">Log Out</router-link></li>
  </div>
</ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn : false
    };
  },
  methods: {
    logOut() {
      this.loggedIn = false;
      localStorage.removeItem("token");
      this.$router.replace("/login");
    },
  },

  components: {}
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(3, 144, 238);
}

li {
  float: left;
}

li a {
  transition: all 0.25s ease;
  display: block;
  color: white;
  text-align: center;
  padding: 15px 25px;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
}
li a:hover {
  background-color: rgb(4, 101, 167);
  padding: 18px 28px;
}
/* .active {
    background-color: rgb(8, 0, 117);
    color: white;
} */
</style>
