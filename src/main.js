import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Input from '@/dynamic-form/components/Input.vue';
import Checkbox from '@/dynamic-form/components/Checkbox.vue';
import Tabs from '@/dynamic-form/components/TabHeaders.vue';
import Tab from '@/dynamic-form/components/Tab.vue';
import Group from '@/dynamic-form/components/Group.vue';
import TextArea from '@/dynamic-form/components/TextArea.vue';

const app = createApp(App);

app.component('Input', Input);
app.component('Checkbox', Checkbox);
app.component('Tabs', Tabs);
app.component('Tab', Tab);
app.component('Group', Group);
app.component('TextArea', TextArea);
/* app.use(plugin, BootstrapVue) */

createApp(App).mount('#app');
