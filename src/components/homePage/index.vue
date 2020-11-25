<template>
  <div>

  <h1>{{ msg }}</h1>
	  <router-link to="/test">跳转test</router-link>	
  </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {
      msg: "Home"
    }
  }
};
</script>

<style>
</style>
