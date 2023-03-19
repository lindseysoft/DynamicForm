<template>
  <div>
    <component
      v-for="(item, index) in sortItems(items)"
      :key="item.id"
      :id="item.id"
      :parentId="item.parentId"
      :parentTabId="item.parentTabId"
      :is="item.itemType"
      :type="item.type"
      :label="item.label"
      :name="item.name"
      :required="item.required"
      :placeholder="item.placeholder"
      :items="sortItems(item.items)"
      :activeTabIndex="activeTabIndex"
    ></component>
  </div>
</template>

<script setup>
//mport { defineProps, defineAsyncComponent } from 'vue'
// import FooComponent from './FooComponent.vue'
// import BarComponent from './BarComponent.vue'

// const FooComponent = defineAsyncComponent(() => import('./FooComponent.vue'))
// const BarComponent = defineAsyncComponent(() => import('./BarComponent.vue'))
function sortItems(listToSort) {
  if (listToSort !== undefined) {
    listToSort.sort((a, b) => a.order - b.order);
    return listToSort;
  }
}

const props = defineProps({
  id: {
    type: Number,
    required: false,
  },
  parentId: {
    type: Number,
    required: false,
  },
  parentTabId: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  items: {
    type: Array,
    default: () => [],
  },
  activeTabIndex: {
    type: Number,
  },
  tabIndex: {
    type: Number,
  },
});

//v-if="childComponent.type"
</script>
