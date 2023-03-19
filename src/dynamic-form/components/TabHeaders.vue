<template>
  <div
    v-show="
      parentTabId == undefined ||
      parentTabId == -1 ||
      activeTabIndex == parentTabId
    "
  >
    <nav class="-mb-px mr-1" role="tablist">
      <a
        v-for="(tab, tabIndex) in items"
        :key="tab.id"
        :id="tab.id"
        class="
          bg-white
          inline-block
          border-l border-t border-r
          rounded-t
          py-2
          px-4
          text-blue-dark
          font-semibold
        "
        :href="'#' + tab.id"
        :parentId="tab.parentId"
        :parentTabId="tab.parentTabId"
        :activeTabIndex="tab.id"
        :tabIndex="tab.id"
        :class="{ active: activeTabIndex === tab.id }"
        @click.prevent="($event) => (activeTabIndex = tab.id)"
        @click="($event) => (activeTabIndex = tab.id)"
      >
        {{ tab.name }} {{ tabIndex < items.length ? ' | ' : '' }}
      </a>
    </nav>

    <!-- <Tab
      v-for="(tab, tabIndex) in items"
      :id="tab.id"
      :items="tab.items"
      :name="tab.name"
      :parentId="tab.parentId"
      :parentTabId="tab.parentTabId"
      :activeTabIndex="activeTabIndex"
    />
    -->
    <RecursiveComponent
      :id="id"
      :items="items"
      :parentid="parentId"
      :parentTabId="parentTabId"
      :activeTabIndex="activeTabIndex"
    />
  </div>
</template>

<script setup>
/* import { defineProps, ref } from 'vue' */
//@click="($event) => modifyTabIndex(tabIndex)"//
import RecursiveComponent from './RecursiveComponent.vue';
import Tab from './Tab.vue';

const emit = defineEmits(['updateActiveIndex']);

function modifyTabIndex(tabIndex) {
  this.props.activeTabIndex = tabIndex;
  emit('updateActiveIndex', tabIndex);
}

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
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
    default: [],
  },
  activeTabIndex: {
    type: Number,
    required: true,
    default: 0,
  },
  tabIndex: {
    type: Number,
    default: 0,
  },
  eventName: {
    type: String,
  },
});
</script>
