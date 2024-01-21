<template>
  <el-icon v-if="type == 'element'">
    <component :is="icon" />
  </el-icon>
</template>

<script setup lang="ts">
interface Props {
  type?: string;
  icon?: string;
}
withDefaults(defineProps<Props>(), {
  type: "element",
});
</script>

<style scoped></style>
