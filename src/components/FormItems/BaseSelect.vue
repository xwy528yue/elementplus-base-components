<template>
  <el-select v-bind="$attrs">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

interface Props {
  data: {label:string,value:string|number} []
}
const props = defineProps<Props>()

const options = ref(props.data)
</script>