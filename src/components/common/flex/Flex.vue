<template>
  <div class="flex">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Flex"
};
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
