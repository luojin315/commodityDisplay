<template>
  <div id="head">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple title">
          <router-link to="/home">new dream</router-link>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple nav_content_box">
          <router-link
            v-for="(item, index) in navList"
            :key="index"
            :to="item.url"
            >{{ item.text }}</router-link
          >
          <router-link to="/home">
            <i class="el-icon-s-goods"></i>
          </router-link>
          <i class="el-icon-s-unfold" @click="busValue"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Bus from "./hideNavMiddle";

export default {
  name: "headerComponent",
  data() {
    return {
      navList: [
        { text: "All products", url: "/test" },
        { text: "Bins", url: "/home" },
        { text: "Lighting", url: "/home" },
        { text: "Kitchen", url: "/home" },
        { text: "Furniture", url: "/home" },
        { text: "Hotel", url: "/home" },
        { text: "Stories", url: "/home" },
      ],
    };
  },
  methods: {
    busValue() {
      Bus.$emit("topNavShow", true);
    },
  },
  mounted() {
    this.navList.map((res) => {
      res.text = res.text.toUpperCase();
    });
  },
  computed: {},
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
  padding-left: 40px;
  padding-right: 40px;
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
    margin: 0px 15px 0px 15px;
    font-size: 14px;
    text-shadow: 0px 0px 0.5px #a0a0a0;
    transition: 0.3s;
    color: #282828;
    &:hover {
      font-size: 15px;
      color: #333;
    }
  }

  i {
    font-size: 20px;
    cursor: pointer;
    color: #333;
  }
}
</style>