<template>
  <div v-show="parentTabId == undefined || activeTabIndex == parentTabId">
    <label :for="name">{{ label }}</label>
    <input
      :placeholder="placeholder"
      :key="id"
      :id="id"
      :name="name"
      :type="type"
      :required="required"
      :value="value"
      :activeTabIndex="activeTabIndex"
    />
  </div>
</template>

<script setup>
// import { ref } from 'vue'
// const value = ref('')
// const label = ref('')
// const required = ref(false)
// const name = ref('')
// const type = ref('text')
// const placeholder = ref('')
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
    required: false
  },
  type: {
    type: String,
    required: false
  },
  required: {
    type: Boolean,
    required: false
  },
  options: {
    type: Array,
    required: false,
    default: []
  },
  value: {
    type: [String, Number, Boolean, Date],
    default: ''
  },
  placeholder: {
    type: String,
    required: false
  },
  activeTabIndex: {
    type: Number
  },
  tabIndex: {
    type: Number
  }
})
</script>
