<template>
  <div class="TAI-text TAI-height" v-show="!inputShow" @dblclick="edit">
    {{ text }}
  </div>
  <el-input
    ref="input"
    class="TAI-height"
    v-show="inputShow"
    v-model="text"
    @blur="inputChange"
    @change="inputChange"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
const props = defineProps<{
  text?: string;
  placeholder?: string;
  itemHeight?: string;
}>();

const input = ref();

const text: Ref<string | undefined> = ref("");
if (props.text) {
  text.value = props.text;
}
const inputChange = () => {
  inputShow.value = false;
  emits("edit", text.value);
};

const inputShow = ref(false);

const emits = defineEmits(["edit"]);

const edit = () => {
  inputShow.value = true;
  input.value.focus();
};
</script>

<style scoped lang="scss">
.TAI-text {
  width: 100%;
}
.TAI-height {
  height: v-bind(itemHeight);
  line-height: v-bind(itemHeight);
}
</style>
