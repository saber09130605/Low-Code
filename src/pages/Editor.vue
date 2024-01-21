<template>
  <div>
    <baseHeaderVue
      :title="'过文章'"
      :compList="compList"
      :ctrlList="ctrlList"
    />
    <div style="position: relative"></div>
  </div>
</template>

<script setup lang="ts">
import baseHeaderVue from "../components/header/baseHeader.vue";

defineProps<{
  compList?: [any]; //组件列表
  ctrlList?: [any]; //操作按钮列表
}>();
</script>

<style src="./../assets/css/reset.css"></style>
<style src="./../assets/css/base.css"></style>
<style scoped>
.tu {
  position: absolute;
  width: 1000px;
  height: auto;
}
</style>
