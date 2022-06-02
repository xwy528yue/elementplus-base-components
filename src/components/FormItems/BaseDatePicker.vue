<template>
  <el-date-picker v-bind="$attrs" :value-format="valueFormat" />
</template>

<script lang="ts" setup>
import { useAttrs, computed } from 'vue'

const $attrs = useAttrs()

const valueFormat = computed(() => {
  let _ = ''
  switch ($attrs.type) {
    case 'datetime':
      _ ='YYYY-MM-DD HH:mm:ss'
      break;
    default: 
      _ = 'YYYY-MM-DD'
  }
  return _
})

</script>
