<template>
  <div class="editor-box">
    <baseHeaderVue
      :title="'过文章'"
      :compList="compList"
      :ctrlList="ctrlList"
    />
    <div class="content-box" style="position: relative">
      <layerPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import baseHeaderVue from "../components/header/baseHeader.vue";
import layerPanel from "../components/layerPanel/layerPanel.vue";

defineProps<{
  compList?: [any]; //组件列表
  ctrlList?: [any]; //操作按钮列表
}>();
</script>

<style src="./../assets/css/reset.css"></style>
<style src="./../assets/css/base.css"></style>
<style scoped>
.editor-box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content-box {
  flex: 1;
  position: relative;
}
</style>
