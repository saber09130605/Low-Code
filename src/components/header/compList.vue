<template>
  <div class="lvtu-comp-list">
    <div
      v-for="(item, index) in compList"
      class="lvtu-comp-btn"
      @mouseover="mouseOverEvent($event, index)"
      @mouseleave="mouseLeaveEvent($event, index)"
      @click="addComp(item)"
    >
      <baseIcon
        :icon="item.icon"
        :type="item.iconType"
        style="font-size: 20px"
      />
      <div>{{ item.title }}</div>
      <div class="lvtu-comp-child-box" v-show="hideChild(item, index)">
        <el-tooltip
          effect="dark"
          v-for="childItem in item.child"
          :content="childItem.tips ? childItem.tips : childItem.title"
        >
          <div class="lvtu-comp-child-item" @click="addComp(childItem)">
            <baseIcon
              :icon="childItem.icon"
              :type="item.iconType"
              style="font-size: 20px"
            />
            <div>{{ childItem.title }}</div>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import baseIcon from "../common/baseIcon.vue";
defineProps<{
  compList?: any[];
}>();
const hideChild = (item: { child: any }, index: number) => {
  return index === childIndex.value && Array.isArray(item.child);
};
const childIndex = ref(-1);
const mouseOverEvent = (_event: any, index: number) => {
  if (index != childIndex.value) {
    childIndex.value = index;
  }
};
const mouseLeaveEvent = (_event: any, index: number) => {
  if (index === childIndex.value) {
    childIndex.value = -1;
  }
};

const addComp = (compNew: { compName: string }) => {
  if (compNew.compName) {
    console.log({
      compName: compNew.compName,
    });
  }
};
</script>

<style scoped lang="scss">
.lvtu-comp-list {
  height: 100%;
  display: flex;
  .lvtu-comp-btn {
    min-width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    &:hover {
      background-color: var(--lvtu-hover-background);
    }
    .lvtu-comp-child-box {
      position: absolute;
      width: 360px;
      left: 0;
      top: 100%;
      background-color: #2d2727;
      display: flex;
      .lvtu-comp-child-item {
        width: 60px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          background-color: var(--lvtu-hover-background);
        }
      }
    }
  }
}
</style>
