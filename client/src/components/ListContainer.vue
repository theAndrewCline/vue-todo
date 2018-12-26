<template>
  <div class='ListContainer'>
    <Input 
        v-model="newToDoText" 
        placeholder="add new todo"
    />
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
import ListItem from './ListItem.vue'
import Input from './Input.vue'

export default {
    components: {
        ListItem, Input
    },
    data: function () {
        return {
            newToDoText: '',
            todos: [
                { text: 'walk dog' }, 
                { text: 'take out trash' }, 
                { text: 'learn typescript'}, 
                { text: 'learn docker' }
            ]
        }
    }, 
    methods: {
        addTodo: function () {
            const trimmedText = this.newToDoText.trim()
            this.todos.push({ text: trimmedText})
        }
    }
}
</script>

<style scoped>
    .ListContainer {
        background: #e9e9e9;
        width: 550px; 
        height: 600px;
        box-shadow: 1px 1px 5px #777777
    }
</style>