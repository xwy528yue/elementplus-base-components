<template>
  <div class="base-form">
    <el-form
      ref="formRef"
      :model="form" 
      label-suffix="："
      :disabled="props.options.disabled"
      label-width="120px">
      <el-row :gutter="10">
        <template v-if="props.options.columns">
          <el-col :span="colSpan(props.options.span || item.span)" v-for="item in props.options.columns" :key="item.key">
            <el-form-item
              :prop="item.prop"
              :label="item.label"
              :rules="item.rules ? item.rules : []">
              <component 
                :is="renderItem(item.type)"
                v-model="form[item.prop]"
                v-bind="item.options"
                :disabled="item?.disabled || props.options?.disabled" />
            </el-form-item>
          </el-col>
        </template>
        <el-col :span="6">
          <el-button type="primary" @click="onQuery">查询</el-button>
          <el-button type="danger">清空</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, defineProps, computed, defineExpose } from "vue";
import BaseSelect from './FormItems/BaseSelect.vue'
import BaseCheckbox from './FormItems/BaseCheckbox.vue'
import BaseDatePicker from './FormItems/BaseDatePicker.vue'
import BaseTimePicker from './FormItems/BaseTimePicker.vue'

const props = defineProps({
  options: {
    type: Object,
    required: true,
    default: () => {},
  },
  data: Object,
})
// do not use same name with ref
const form = reactive({});
if(props.data) {
  Object.assign(form, props.data)
}

const colSpan = computed(() => (span:number) => (span || 24 / (window.innerWidth >= 1366 ? 4 : 3)))

const formRef = ref(null)
const renderItem = computed(() => (key:string) => {
  switch (key) {
    case 'select':
      return BaseSelect
    case 'number':
      return 'el-input-number'
    case 'radio':
      return 'el-radio'
    case 'rate':
      return 'el-rate'
    case 'slider':
      return 'el-slider'
    case 'switch':
      return 'el-switch'
    case 'date':
      return BaseDatePicker
    case 'time':
      return BaseTimePicker
    case 'cascader':
      return 'el-cascader'
    case 'checkbox':
      return BaseCheckbox
    default:
      return 'el-input'
  }
})

/* events */
const onQuery = () => {
  validate()
  console.log(form)
}

const validate = async () => {
  try {
    await formRef.value?.validate()
  } catch (error) {
    console.log(error)
  }
}

/* 向外暴漏的组件方法 */
defineExpose({
  validate,
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.base-form{
  margin: 10px;
}
</style>
