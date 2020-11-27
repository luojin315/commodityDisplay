<template>
  <div id="head">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple title">
          <router-link to="/home">new dream</router-link>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple nav_content_box">
          <router-link to="/home">All products</router-link>
          <router-link to="/home">Bins</router-link>
          <router-link to="/home">Lighting</router-link>
          <router-link to="/home">Kitchen</router-link>
          <router-link to="/home">Furniture</router-link>
          <router-link to="/home">Hotel</router-link>
          <router-link to="/home">Stories</router-link>
          <router-link to="/home">
            <i class="el-icon-s-goods"></i>
          </router-link>
          <i class="el-icon-s-unfold"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "headerComponent",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple {
  background: transparent;
}
.grid-content {
  min-height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.nav_content_box {
  float: right;
  a {
    margin: 0px 10px 0px 10px;
    font-size: 15px;
    text-shadow: 0px 0px 0.5px #a0a0a0;
    transition: 0.3s;
    color: #a0a0a0;
    &:hover {
      font-size: 16px;
      color: #333;
    }
  }

  i {
    font-size: 18px;
    cursor: pointer;
    color: #333;
  }
}
</style>