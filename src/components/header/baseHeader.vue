<template>
  <div class="base-header-box">
    <div class="title">
      <textAndInputComp
        :text="title"
        @edit="onTitleEdit"
        :itemHeight="'40px'"
      />
    </div>
    <div class="content">
      <compListComp :compList="compList" />
    </div>
    <ctrlListComp :ctrlList="ctrlList" />
  </div>
</template>

<script setup lang="ts">
import textAndInputComp from "../common/textAndInput.vue";
import compListComp from "./compList.vue";
import ctrlListComp from "./ctrlList.vue";
defineProps<{
  title?: string;
  compList?: any[];
  ctrlList?: any[];
}>();

const onTitleEdit = (newValue?: string) => {
  console.log({ newValue });
};
</script>

<style scoped lang="scss">
.base-header-box {
  background: #000;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  .title {
    min-width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    &:after {
      content: "";
      border-left: 1px #ebebeb solid;
      height: 20px;
      margin: 0 6px;
    }
  }
  .content {
    flex: 1;
  }
}
</style>
