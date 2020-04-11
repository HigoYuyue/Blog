<template>
  <div class="open-btn" @click="openCode">
    <span class="open-ico"></span>
  </div>
</template>

<script>
export default {
  name: "Pop",
  methods: {
    openCode() {
      const filePath = _.last(this.$route.matched).components.default.__file;
      this.openInVscode({
        linkUrl: `${process.env.VUE_APP_PATH}/${filePath}`
      });
    },
    openInVscode({ linkUrl }) {
      window.open(`vscode://file${linkUrl}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.open-btn {
  position: fixed;
  z-index: 9999;
  right: 2%;
  bottom: 10%;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  padding: 9px;
  border: 1px solid #ced4d9;
  background: white;
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  cursor: pointer;
  float: left;
  -webkit-transition: all 0.15s;
  transition: all 0.15s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.open-btn:hover {
  background: #f2f4f5;
}
.open-ico {
  width: 50px;
  height: 50px;
  margin-left: 5px;
  margin-top: 5px;
  background-image: url("../assets/vscode.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  cursor: pointer;
  color: #333;
}
</style>
