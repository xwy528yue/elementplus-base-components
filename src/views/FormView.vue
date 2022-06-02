<template>
  <BaseForm :data="data" :options="options"></BaseForm>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import BaseForm from "@/components/BaseForm.vue";

const data = reactive({
  checkbox: "Option A,Option B",
  date: "2012-12-12",
});
const options = ref({
  columns: [
    {
      label: "文本",
      prop: "text",
      type: "el-input",
      disabled: true,
      options: {
        onChange(value) {
          console.log(value);
        },
      },
    },
    {
      label: "密码",
      prop: "password",
      type: "el-input",
      options: {
        type: "password",
      },
      rules: [
        { required: true, message: '密码是必填项目' },
      ]
    },
    {
      label: "下拉选择器",
      prop: "select",
      type: "select",
      options: {
        data: [
          { label: "a", value: 1 },
          { label: "b", value: 2 },
          { label: "c", value: 3 },
        ],
      },
    },
    {
      label: "数字",
      prop: "number",
      type: "number",
    },
    {
      label: "评分",
      prop: "rate",
      type: "rate",
    },
    {
      label: "滑块",
      prop: "slider",
      type: "slider",
    },
    {
      label: "开关",
      prop: "switch",
      type: "switch",
    },
    {
      label: "日期",
      prop: "date",
      type: "date",
      options: {
        type: "date",
      },
    },
    {
      label: "日期时间",
      prop: "datetime",
      type: "date",
      options: {
        type: "datetime",
      },
    },
    {
      label: "时间",
      prop: "time",
      type: "time",
    },
    {
      label: "级联选择器",
      prop: "cascader",
      type: "cascader",
      options: {
        options: [
          {
            value: "guide",
            label: "Guide",
            children: [
              {
                value: "disciplines",
                label: "Disciplines",
                children: [
                  {
                    value: "consistency",
                    label: "Consistency",
                  },
                  {
                    value: "feedback",
                    label: "Feedback",
                  },
                  {
                    value: "efficiency",
                    label: "Efficiency",
                  },
                  {
                    value: "controllability",
                    label: "Controllability",
                  },
                ],
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "side nav",
                    label: "Side Navigation",
                  },
                  {
                    value: "top nav",
                    label: "Top Navigation",
                  },
                ],
              },
            ],
          },
          {
            value: "component",
            label: "Component",
            children: [
              {
                value: "basic",
                label: "Basic",
                children: [
                  {
                    value: "layout",
                    label: "Layout",
                  },
                  {
                    value: "color",
                    label: "Color",
                  },
                  {
                    value: "typography",
                    label: "Typography",
                  },
                  {
                    value: "icon",
                    label: "Icon",
                  },
                  {
                    value: "button",
                    label: "Button",
                  },
                ],
              },
              {
                value: "form",
                label: "Form",
                children: [
                  {
                    value: "radio",
                    label: "Radio",
                  },
                  {
                    value: "checkbox",
                    label: "Checkbox",
                  },
                  {
                    value: "input",
                    label: "Input",
                  },
                  {
                    value: "input-number",
                    label: "InputNumber",
                  },
                  {
                    value: "select",
                    label: "Select",
                  },
                  {
                    value: "cascader",
                    label: "Cascader",
                  },
                  {
                    value: "switch",
                    label: "Switch",
                  },
                  {
                    value: "slider",
                    label: "Slider",
                  },
                  {
                    value: "time-picker",
                    label: "TimePicker",
                  },
                  {
                    value: "date-picker",
                    label: "DatePicker",
                  },
                  {
                    value: "datetime-picker",
                    label: "DateTimePicker",
                  },
                  {
                    value: "upload",
                    label: "Upload",
                  },
                  {
                    value: "rate",
                    label: "Rate",
                  },
                  {
                    value: "form",
                    label: "Form",
                  },
                ],
              },
              {
                value: "data",
                label: "Data",
                children: [
                  {
                    value: "table",
                    label: "Table",
                  },
                  {
                    value: "tag",
                    label: "Tag",
                  },
                  {
                    value: "progress",
                    label: "Progress",
                  },
                  {
                    value: "tree",
                    label: "Tree",
                  },
                  {
                    value: "pagination",
                    label: "Pagination",
                  },
                  {
                    value: "badge",
                    label: "Badge",
                  },
                ],
              },
              {
                value: "notice",
                label: "Notice",
                children: [
                  {
                    value: "alert",
                    label: "Alert",
                  },
                  {
                    value: "loading",
                    label: "Loading",
                  },
                  {
                    value: "message",
                    label: "Message",
                  },
                  {
                    value: "message-box",
                    label: "MessageBox",
                  },
                  {
                    value: "notification",
                    label: "Notification",
                  },
                ],
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "menu",
                    label: "Menu",
                  },
                  {
                    value: "tabs",
                    label: "Tabs",
                  },
                  {
                    value: "breadcrumb",
                    label: "Breadcrumb",
                  },
                  {
                    value: "dropdown",
                    label: "Dropdown",
                  },
                  {
                    value: "steps",
                    label: "Steps",
                  },
                ],
              },
              {
                value: "others",
                label: "Others",
                children: [
                  {
                    value: "dialog",
                    label: "Dialog",
                  },
                  {
                    value: "tooltip",
                    label: "Tooltip",
                  },
                  {
                    value: "popover",
                    label: "Popover",
                  },
                  {
                    value: "card",
                    label: "Card",
                  },
                  {
                    value: "carousel",
                    label: "Carousel",
                  },
                  {
                    value: "collapse",
                    label: "Collapse",
                  },
                ],
              },
            ],
          },
          {
            value: "resource",
            label: "Resource",
            children: [
              {
                value: "axure",
                label: "Axure Components",
              },
              {
                value: "sketch",
                label: "Sketch Templates",
              },
              {
                value: "docs",
                label: "Design Documentation",
              },
            ],
          },
        ],
      },
    },
    {
      label: "多选框",
      prop: "checkbox",
      type: "checkbox",
      span: 12,
      options: {
        data: [
          { label: "Option A" },
          { label: "Option B" },
          { label: "Option C" },
          { label: "disabled", disabled: true },
          { label: "selected and disabled", disabled: true },
        ],
      },
    },
  ],
});
</script>