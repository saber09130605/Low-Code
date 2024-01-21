<template>
  <div class="lvtu-ctrl-btn-list">
    <el-tooltip
      effect="dark"
      v-for="item in ctrlList"
      :content="item.tips ? item.tips : item.name"
    >
      <div class="lvtu-ctrl-btn" @click="action(item)">
        <baseIcon
          :icon="item.icon"
          :type="item.iconType"
          style="font-size: 20px"
        />
      </div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import baseIcon from "../common/baseIcon.vue";
const props = defineProps<{
  ctrlList?: any[];
}>();
console.log({
  ctrlList: props.ctrlList,
});
const action = (ctrl: any) => {
  console.log(ctrl);
};
</script>

<style scoped lang="scss">
.lvtu-ctrl-btn-list {
  display: flex;
  .lvtu-ctrl-btn {
    width: 40px;
    height: 40px;
    margin: 0 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: var(--lvtu-hover-background);
    }
  }
}
</style>
