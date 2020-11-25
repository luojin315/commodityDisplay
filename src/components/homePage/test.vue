<template>
  <div>

  <h1>{{ msg }}</h1>
	<router-link to="/home">跳转home</router-link>	
  </div>
</template>

<script>
export default {
  name: "test",
  data () {
    return {
      msg: "Test"
    }
  }
};
</script>

<style>
</style>