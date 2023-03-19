<template>
  <div
    v-show="
      parentTabId == undefined ||
      parentTabId == -1 ||
      id == activeTabIndex ||
      parentId == activeTabIndex
    "
  >
    <RecursiveComponent
      :items="items"
      :activeTabIndex="activeTabIndex"
      :parentid="parentId"
      :parentTabId="parentTabId"
    />
  </div>
</template>

/* v-for="(tab, tabIndex) in sortItems(items)" :key="tab.id" :id="tab.id"
:activeTabIndex="activeTabIndex" class="container mx-auto py-3 border-b-4 border-t-4
border-[#40748C]" */

<script setup>
import { ref, defineProps } from 'vue'

import RecursiveComponent from './RecursiveComponent.vue'

//const activeTabIndex = ref(props.id)
//const activeTabIndex = ref(0)

function sortItems(listToSort) {
  listToSort.sort((a, b) => a.order - b.order)
  return listToSort
}

function onUpdateActiveIndex(activeIndex) {
  activeTabIndex.value = activeIndex
}

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
  type: {
    type: String,
    required: false
  },
  items: {
    type: Array,
    required: false,
    default: []
  },
  tabIndex: {
    type: Number,
    default: 0
  },
  activeTabIndex: {
    type: Number,
    required: false,
    default: 0
  }
})
</script>
