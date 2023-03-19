<template>
  <div v-show="parentTabId == undefined || activeTabIndex == parentTabId">
    <label :for="name">{{ label }}</label>
    <textarea
      class="comment"
      :placeholder="placeholder"
      :key="id"
      :id="id"
      :parentId="parentid"
      :parentTabId="parentTabId"
      :name="name"
      :type="type"
      :required="required"
      :value="value"
      v-show="activeTabIndex == parentTabId"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  parentId: {
    type: Number,
    required: true,
  },
  parentTabId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
  },
  value: {
    type: [String, Number, Boolean, Date],
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
  },
  activeTabIndex: {
    type: Number,
  },
});
</script>

<style>
textarea {
  width: 100%;
  height: 100px;
  padding: 8px 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  font-size: 1rem;
}
</style>
