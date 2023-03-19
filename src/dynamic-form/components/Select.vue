<template>
  <div v-show="parentTabId == undefined || activeTabIndex == parentTabId">
    <label :for="name">{{ label }}</label>
    <select
      :key="id"
      :id="id"
      :parentId="parentid"
      :parentTabId="parentTabId"
      :activeTabIndex="activeTabIndex"
      :tabIndex="tabIndex"
      :name="name"
      :required="required"
      v-bind="value"
      v-show="parentTabId == undefined || activeTabIndex == parentTabId"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
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
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  },
  value: {
    type: [String, Number],
    default: ''
  },
  activeTabIndex: {
    type: Number
  },
  tabIndex: {
    type: Number
  }
})
</script>
