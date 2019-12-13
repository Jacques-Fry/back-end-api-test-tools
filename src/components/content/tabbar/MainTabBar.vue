<template>
  <TabBar>
    <div class="tab-bar-left" slot="tab-bar-left">后端API测试工具</div>
    <div slot="tab-bar-center"></div>
    <div class="tab-bar-right" slot="tab-bar-right"></div>
  </TabBar>
</template>

<script type="text/javascript">
import TabBar from "components/common/tabbar/TabBar";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    TabBar
  }
};
</script>

<style scoped>

.tab-bar-left {
  padding: 0 20px;
  font-size: 30px;
  font-weight: 600;
}
.tab-bar-right {
  overflow: hidden;

  padding: 0 20px;
  font-size: 20px;
  font-weight: 600;
}
</style>
