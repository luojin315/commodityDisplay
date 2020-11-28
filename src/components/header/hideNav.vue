<template>
  <div>
    <el-collapse-transition>
      <div id="hideNav" v-show="topNav">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple title">
              <router-link to="/home">new dream</router-link>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple nav_content_box">
              <router-link
                v-for="(item, index) in navList"
                :key="index"
                :to="item.url"
                >{{ item.text }}</router-link
              >
              <i class="el-icon-close" @click="closeTopNav"></i>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import Bus from "./hideNavMiddle";

export default {
  name: "hideNav",
  data() {
    return {
      navList: [
        { text: "Contact", url: "/test" },
        { text: "Downloads", url: "/home" },
        { text: "Press", url: "/home" },
        { text: "Partners", url: "/home" },
        { text: "Professionals", url: "/home" },
        { text: "Career", url: "/home" },
        { text: "Store locator", url: "/home" },
        { text: "My account", url: "/home" },
      ],
      topNav: false,
    };
  },
  computed: {},
  mounted() {
    const that = this;
    Bus.$on("topNavShow", (msg) => {
      that.topNav = msg;
    });
    that.navList.map((res) => {
      res.text = res.text.toUpperCase();
    });
  },
  methods: {
    closeTopNav() {
      this.topNav = false;
    },
  },
};
</script>

<style lang="less" scoped>

#hideNav {
  width: 100%;
}
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
  line-height: 80px;
  box-sizing: border-box;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.title {
  font-size: 24px;
  font-weight: bold;
  padding-left: 40px;
}
.nav_content_box {
  float: right;
  padding-right: 40px;
  a {
    margin: 0px 10px 0px 10px;
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