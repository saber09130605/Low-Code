<template>
  <div class="layer-panel">
    <div class="title">图层</div>
    <div class="rank-btn" @mousedown="onLeftMove">
      <baseIcon icon="Rank" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import useColorStores from "@/stores/useColorStores";
import baseIcon from "@/components/common/baseIcon.vue";

const colorStores = useColorStores();
const baseColor = computed(() => colorStores.baseColor);
const headerColor = computed(() => colorStores.headerColor);

// 图层面板宽度and拖拽面板大小功能
const panelWidth = ref(300);
const setPanelWidth = (width: number) => {
  panelWidth.value = width;
  if (panelWidth.value < 150) {
    panelWidth.value = 150;
  } else if (panelWidth.value > document.body.clientWidth / 2 - 150) {
    panelWidth.value = document.body.clientWidth / 2 - 150;
  }
};
const onmousemove = (ev: MouseEvent) => {
  setPanelWidth(ev.pageX);
};
const onmouseup = () => {
  document.removeEventListener("mousemove", onmousemove);
  document.removeEventListener("mouseup", onmouseup);
};
const onLeftMove = () => {
  document.addEventListener("mousemove", onmousemove);
  document.addEventListener("mouseup", onmouseup);
};
</script>

<style scoped>
.layer-panel {
  background-color: v-bind(baseColor);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: v-bind(panelWidth + "px");
  .title {
    background-color: v-bind(headerColor);
    height: 60px;
    line-height: 60px;
    text-align: center;
    -webkit-user-select: none; /*谷歌 /Chrome*/
    -moz-user-select: none; /*火狐/Firefox*/
    -ms-user-select: none; /*IE 10+*/
    user-select: none;
  }
  .rank-btn {
    position: absolute;
    right: 0;
    top: 6px;
  }
}
</style>
