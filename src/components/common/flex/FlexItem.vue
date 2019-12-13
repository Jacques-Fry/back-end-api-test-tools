<template>
  <div class="flex-item">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "FlexItem"
};
</script>

<style scoped>
.flex-item {
  flex: 1;
}
</style>
