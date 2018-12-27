<template>
    <a-col :span="8" style="margin: .5em;">
      <a-card title="To Do 1">
        <a slot="extra">Edit List</a>
        <div class="adder">
          <a-input
            type="text"
            placeholder="Add New Todo"
          />
          <a-button style="margin-left: 8px;" type="primary">Add Todo</a-button>
        </div>
        <a-list v-if="todos.length">
          <ListItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
        </a-list>
        <p v-else>Your todo list is clear! Great Job!</p>
      </a-card>
    </a-col>
</template>

<script lang="ts">
import ListItem from './ListItem.vue';
export default {
  components: {
    ListItem,
  },
  props: {
    ToDoList: {
      
    }
  },
  data() {},
  methods: {},
};
</script>

<style scoped>
.adder {
  display: flex;
}
</style>