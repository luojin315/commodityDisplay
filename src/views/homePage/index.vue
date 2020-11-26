<template>
  <div>
    <div class="banner_box">
      <span class="font">asdasd</span>
    </div>
    <router-link to="/test">跳转test</router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Home",
    };
  },
};
</script>

<style lang="less">
.banner_box {
  width: 100%;
  height: 100vh;
  background: url(../../assets/home/banner.jpg) no-repeat center center;
  background-size: cover;
}
@media (max-width: 700px) {
  .banner_box {
    background: url(../../assets/home/banner_min.jpg) no-repeat center center;
    background-size: cover;
  }
}
</style>>
