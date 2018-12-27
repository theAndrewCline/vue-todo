import Vue from 'vue';
import Vuex from 'vuex';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';

Vue.use(Vuex);
Vue.use(Antd);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    ToDoLists: [
      {
        name: 'groceries',
        items: [
          { id: 0, text: 'beef' },
          { id: 1, text: 'potatoes' },
          { id: 1, text: 'puppy food' },
        ],
      },
      {
        name: 'things to do',
        items: [
          { id: 0, text: 'learn typescript' },
          { id: 1, text: 'learn docker' },
          { id: 1, text: 'world domination' },
        ],
      },
      {
        name: 'more things to do',
        items: [
          { id: 0, text: 'train a falcon' },
          { id: 1, text: 'kill a sea monster' },
          { id: 1, text: 'world domination part 2' },
        ],
      },
    ],
  },
  mutations: {
    addList(state, newName: string) {
      state.ToDoLists.push({ name: newName, items: [] });
    },
  },
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
