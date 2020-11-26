<template>
  <div id="app">
    <transition name="el-zoom-in-center">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // this.$axios.get('/api')
    // 	.then(res => {
    // 		console.log(res)
    // 	}).catch(res => {
    // 	})
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app{
  font-family: "微软雅黑";
}
</style>
