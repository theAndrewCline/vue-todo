<template>
  <div class='ListContainer'>
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

export default {
    components: {
        ListItem
    },
    data: function () {
        return {
            todos: [
                { text: 'walk dog' }, 
                { text: 'take out trash' }, 
                { text: 'learn typescript'}, 
                { text: 'learn docker' }
            ]
        }
    }, 
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