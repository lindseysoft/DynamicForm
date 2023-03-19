<template>
  <div class="display:flex; flex-direction: column;">
    <form style="display: flex; flex-direction: column">
      <RecursiveComponent :items="sortItems(items)" :activeTabIndex="activeTabIndex" />
      <button
        class="inline-flex items-center my-2 px-4 py-2 hover:bg-red-700 text-sm font-medium rounded-md bg-[#40748c] text-[#FDFDFD]"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'

import RecursiveComponent from '../components/RecursiveComponent.vue'

import dynamicFormData from '../data/dynamic-form.json'

const items = ref(dynamicFormData)

const activeTabIndex = ref(2)
const parentId = ref(0)
const parentTabId = ref(0)

const tabIndex = ref(0)

function sortItems(listToSort) {
  listToSort.sort((a, b) => a.order - b.order)
  return listToSort
}

function onUpdateActiveIndex(activeIndex) {
  activeTabIndex.value = activeIndex
}
</script>

<style scoped>
.tabrow {
  text-align: center;
  list-style: none;
  margin: 50px 0 20px 0px;
  padding: 0;
  line-height: 24px;
  height: 26px;
  overflow: hidden;
  font-size: 12px;
  font-family: verdana;
  position: relative;
}
.tabrow li {
  background: #d3cece;
  /* background: -o-linear-gradient(top, #ececec 50%, #d1d1d1 100%);
    background: -ms-linear-gradient(top, #ececec 50%, #d1d1d1 100%);
    background: -moz-linear-gradient(top, #ececec 50%, #d1d1d1 100%);
    background: -webkit-linear-gradient(top, #ececec 50%, #d1d1d1 100%);
    background: linear-gradient(top, #ececec 50%, #d1d1d1 100%); */

  /* border-top-left-radius: 6px;
    border-top-right-radius: 6px; */
}
.tabrow a {
  color: #555;
  text-decoration: none;
}
.tabrow li.active {
  display: inline-block;
  position: relative;
  z-index: 0;
  border: 1px solid #aaa;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 #fff;
  text-shadow: 0 1px #fff;
  margin: 0 -5px;
  padding: 0 20px;
  color: #40748c;
  font-weight: bold;
  border-radius: 6px 6px 0px 0px;
  background: #fff;
  color: #40748c;
  font-weight: bold;
  z-index: 2;
  border-bottom-color: #fff;
}
.tabrow:before {
  position: absolute;
  content: ' ';
  width: 100%;
  bottom: 0;
  left: 0;
  /*  border-bottom: 1px solid #aaa; */
  z-index: 1;
}
.tabrow li:before,
.tabrow li:after {
  /*  border: 1px solid #aaa; */
  position: absolute;
  bottom: -1px;
  width: 5px;
  height: 5px;
  content: ' ';
}
.tabrow li:before {
  left: -6px;
  /* border-bottom-right-radius: 6px;
    border-width: 0 1px 1px 0; */
  box-shadow: 2px 2px 0 #d1d1d1;
}
.tabrow li:after {
  right: -6px;
  /*  border-bottom-left-radius: 6px;
    border-width: 0 0 1px 1px; */
  box-shadow: -2px 2px 0 #d1d1d1;
}
.tabrow li.active:before {
  box-shadow: 2px 2px 0 #fff;
}
.tabrow li.active:after {
  box-shadow: -2px 2px 0 #fff;
}

form input {
  display: block;
  width: 100%;
}

fieldset {
  background-color: transparent;
}

.nav-item legend {
  background-color: whitesmoke;
  color: #40748c;
  font-weight: bold;
  padding: 5px 10px;
}
</style>
