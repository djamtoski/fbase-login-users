<template>
<div>
    <form class="col-md-3 center-element">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
                type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                v-model="password">
        </div>
        <button 
            type="submit" 
            class="btn btn-primary" 
            @click.prevent="login">Submit</button>
    </form>
    <div class="alert alert-warning col-lg-8">
  {{ error | convertError }}
</div>
    </div>
</template>

<script>
import loginService from './login-service';
export default {
  data() {
    return {
      email: '',
      password: '',
      error : ''
    };
  },
  methods: {
    login() {
      loginService.post('',{
        email : this.email,
        password : this.password,
        returnSecureToken : true
      })
      .then(data => {
        const now = new Date().getTime();
        const expiresInMiliseconds = Number.parseInt(data.expiresIn, 10) * 1000;
        const expiresatDate = new Date(now + expiresInMiliseconds);
        localStorage.setItem('token',data.idToken);
        localStorage.setItem('expiresAt', expiresatDate);
        this.$router.replace('/');
      })
      .catch((error) =>{
        this.error = error.response.data.error.message;
      })
      
    }
  },
  components : {
    loginService
  },
  filters : {
    convertError(val){
      var convertedstring = val.toLowerCase().replace('_',' ').split(' ');
      for (var i = 0; i< convertedstring.length ; i++ ){
        convertedstring[i] = convertedstring[i].charAt(0).toUpperCase() +
        convertedstring[i].substring(1);
      }
      return convertedstring.join(' ');
    }
  },
};
</script>

<style>
.center-element {
  margin: auto;
  width: 50%;
  padding: 10px;
}
button{
  transition: ease 250ms
}
button:hover{
  padding: 10px 15px;
}
</style>
