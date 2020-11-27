<template>
  <div id="hideNav">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "hideNav",
  data() {
    return {
      msg: "hello word",
    };
  },
};
</script>

<style lang="less" scoped>
#hideNav {
  width: 100%;
  height: 80px;
}
</style>