import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ToDoLists: [
      {
        name: 'groceries',
        items: [
          { id: 0, text: 'beef' },
          { id: 1, text: 'potatoes' },
          { id: 2, text: 'puppy food' }
        ]
      },
      {
        name: 'things to do',
        items: [
          { id: 0, text: 'learn typescript' },
          { id: 1, text: 'learn docker' },
          { id: 2, text: 'world domination' }
        ]
      },
      {
        name: 'more things to do',
        items: [
          { id: 0, text: 'train a falcon' },
          { id: 1, text: 'kill a sea monster' },
          { id: 2, text: 'world domination part 2' },
        ]
      }
    ]
  },
  mutations: {
    addList (state: any, newName: string) {
      console.log('add list')
      state.ToDoLists.push({ name: newName, items: [] })
    },
    addItem (state: any, payload: {ListName: string, itemToAdd: {id: number, text: string}}) {
      state.ToDoLists.forEach((ToDoList: any, index: number) => {
        if (ToDoList.name === payload.ListName) {
          state.ToDoLists[index].items.push(itemToAdd)
        }
      })
    }
  }
})

export default store
