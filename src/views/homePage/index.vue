<template>
  <div id="home_banner">
    <hideNav />
    <div class="banner_box">
      <headerComponent class="header_style" />
      <div class="banner_font">
        <h4>Cabin chair w/ leather - USD 695.00</h4>
        <h1>Our first wooden furniture. <br />The Vipp Cabin chair</h1>
        <button class="public_button">BUY NOW</button>
      </div>
    </div>
    <router-link to="/test">跳转test</router-link>
  </div>
</template>

<script>
import headerComponent from '@/components/header'
import hideNav from '@/components/header/hideNav'
export default {
  name: "home",
  data() {
    return {
      msg: "Home",
    };
  },
  components: {
    headerComponent,
    hideNav
  },
};
</script>

<style lang="less">
#home_banner {
  .banner_box {
    width: 100%;
    height: 100vh;
    background: url(../../assets/home/banner.jpg) no-repeat center center;
    background-size: cover;
    position: relative;
  }
  @media (max-width: 750px) {
    .banner_box {
      background: url(../../assets/home/banner_min.jpg) no-repeat center center;
      background-size: cover;
    }
  }

  .banner_font {
    color: #282828;
    max-width: 500px;
    margin-left: 8%;
    padding-top: 200px;
    h4 {
      font-size: 14px;
      font-weight: normal;
    }
    h1 {
      font-size: 38px;
      margin-top: 10px;
    }
  }
  @media (max-width: 1000px) {
    .banner_font {
      position: absolute;
      bottom: 20px;
      left: 0%;
      h1 {
        font-size: 24px;
      }
    }
  }
  .public_button {
    width: 240px;
    height: 38px;
    background-color: transparent;
    border: 1px solid rgba(40, 40, 40, 0.6);
    font-size: 12px;
    font-weight: bold;
    margin-top: 30px;
    transition: 0.3s;
    cursor: pointer;
  }
  .public_button:hover {
    background: #282828;
    color: #ffffff;
    border-color: #282828;
  }
  
}
</style>>
