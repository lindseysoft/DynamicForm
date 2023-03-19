<template>
  <div class="groupbox">
    <fieldset
      v-show="
        parentTabId == undefined ||
        parentTabId == -1 ||
        activeTabIndex == parentTabId ||
        parentId == activeTabIndex
      "
    >
      <legend class="my-4">{{ name }}</legend>
      <RecursiveComponent
        :activeTabIndex="activeTabIndex"
        :id="id"
        :items="items"
        :parentid="parentId"
        :parentTabId="parentTabId"
      />
    </fieldset>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import RecursiveComponent from './RecursiveComponent.vue';

//const activeTabIndex = ref(props.parentId)

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
  type: {
    type: String,
    required: false,
  },
  items: {
    type: Array,
    required: false,
    default: [],
  },
  tabIndex: {
    type: Number,
    default: 0,
  },
  activeTabIndex: {
    type: Number,
    required: false,
    default: 0,
  },
});
</script>

<style scoped>
.groupbox {
  border-color: red;
  border: 5px;
}

fieldset {
  background-color: transparent;
  border-color: red;
  border: 5px;
}

fieldset legend {
  background-color: whitesmoke;
  color: #40748c;
  padding: 5px 10px;
}
</style>
