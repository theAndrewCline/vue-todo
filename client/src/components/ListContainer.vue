<template>
  <div class='ListContainer'>
      <input 
        type="text"
        v-model="newToDoText" 
        placeholder="add new todo"
        @keydown.enter="addTodo"
      >
      <input type="button" value="add todo" @click="addTodo">
    <ul>
        <ListItem 
            v-for="todo in todos"
            :key="todo.text"
            :todo="todo"
        />
  </ul>

  </div>
    
</template>

<script lang="ts">
import ListItem from './ListItem.vue';

export default {
    components: {
        ListItem,
    },
    data() {
        return {
            newToDoText: '',
            todos: [
                { text: 'walk dog' },
                { text: 'take out trash' },
                { text: 'learn typescript'},
                { text: 'learn docker' },
            ],
        };
    },
    methods: {
        addTodo() {
            const trimmedText = this.newToDoText.trim();
            this.todos.push({ text: trimmedText});
        },
    },
};
</script>

<style scoped>
    .ListContainer {
        background: #e9e9e9;
        width: 550px; 
        height: 600px;
        box-shadow: 1px 1px 5px #777777
    }
</style>