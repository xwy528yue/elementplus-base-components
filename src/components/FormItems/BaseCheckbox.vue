<template>
  <el-checkbox-group v-model="checkList" @change="onChange">
    <el-checkbox
      v-for="box in boxs"
      :key="box.label"
      :label="box.label"
      :disabled="box.disabled"
    />
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  data: Array,
  modelValue: String,
});

const emits = defineEmits(["update:modelValue"]);

const checkList = ref<any[]>([]);
if (props.modelValue) {
  checkList.value = props.modelValue.split(",");
}

const onChange = (e) => {
  emits("update:modelValue", e.join(","));
};

interface Box {
  label: string;
  disabled?: boolean;
}
const boxs = ref<Box[]>([]);
if (props.data) {
  boxs.value = Array.from(props.data);
}
</script>
