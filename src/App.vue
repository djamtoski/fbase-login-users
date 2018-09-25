<template>
  <div>
<header-comp></header-comp>
    <router-view>
    </router-view>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import headerComp from './components/header-comp';
import footerComp from './components/footer-comp';
export default {
  data(){
    return {

    }
  },
  methods:{},
  components : {
    headerComp,
    footerComp,
  }
}
</script>

<style>

</style>
