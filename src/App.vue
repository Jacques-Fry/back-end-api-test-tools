<template>
  <div id="app">
    <Layout>
      <div class="layout-title" slot="layout-one-title">
        <MainTabBar />
      </div>
      <div class="layout-left" slot="layout-one-left">
        <vue-scroll></vue-scroll>
      </div>
      <div class="layout-right" slot="layout-one-right">
        <vue-scroll>
          <Home />
        </vue-scroll>
      </div>
      <div class="layout-foot" slot="layout-one-foot">© 最终解释权归花落泪知雨所有</div>
    </Layout>
  </div>
</template>

<script>
import Layout from "components/common/layout/LayoutOne";
import Home from "views/home/Home";
import MainTabBar from "components/content/tabbar/MainTabBar";
export default {
  name: "app",
  components: {
    Layout,
    Home,
    MainTabBar
  }
};
</script>
<style>
@import "assets/css/normalize.css";
</style>
<style scoped>
.layout-title,
.layout-left,
.layout-right,
.layout-foot {
  position: relative;
  height: 100%;
}
.layout-foot {
  text-align: center;
  font-size: 12px;
}
</style>
