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
            :key="todo.id"
            :todo="todo"
            @removeTodo="removeTodo"
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
            nextTodoId:  4,
            newToDoText: '',
            todos: [
                {id: 0, text: 'walk dog' },
                {id: 1, text: 'take out trash' },
                {id: 2, text: 'learn typescript'},
                {id: 3, text: 'learn docker' },
            ],
        };
    },
    methods: {
        addTodo() {
            const trimmedText = this.newToDoText.trim();
            this.todos.push({id: this.nextTodoId,  text: trimmedText});
            this.nextTodoId++
            this.newToDoText = ''
        },
        removeTodo(id: number) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        }
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