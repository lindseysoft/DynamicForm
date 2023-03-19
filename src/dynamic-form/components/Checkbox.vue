<template>
  <div v-show="parentTabId == undefined || activeTabIndex == parentTabId">
    <label :for="name">{{ label }}</label>
    <input
      :key="id"
      :id="id"
      :name="name"
      type="checkbox"
      :checked="value"
      :parentId="parentId"
      :parentTabId="parentTabId"
      :activeTabIndex="activeTabIndex"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  parentId: {
    type: Number,
    required: true
  },
  parentTabId: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: Boolean,
    required: true,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  activeTabIndex: {
    type: Number
  },
  tabIndex: {
    type: Number
  }
})

//@input="emitInput($event.target.checked)"
// const emits = defineEmits(['update:checked'])

// const emitInput = (value) => {
//   emits['update:checked'](value)
// }
</script>
