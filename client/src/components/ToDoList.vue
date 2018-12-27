<template>
    <a-col :span="10" style="margin: .5em;">
      <a-card title="To Do 1">
        <a slot="extra">Edit List</a>
        <div class="adder">
          <a-input
            type="text"
            v-model="newToDoText"
            placeholder="Add New Todo"
            @keydown.enter="addTodo"
          />
          <a-button style="margin-left: 8px;" type="primary" @click="addTodo">Add Todo</a-button>
        </div>
        <a-list v-if="todos.length">
          <ListItem v-for="todo in todos" :key="todo.id" :todo="todo" @removeTodo="removeTodo"/>
        </a-list>
        <p v-else>Your todo list is clear! Great Job!</p>
      </a-card>
    </a-col>
</template>

<script lang="ts">
import ListItem from "./ListItem.vue";
export default {
  components: {
    ListItem
  },
  data() {
    return {
      nextTodoId: 4,
      newToDoText: "",
      todos: [
        { id: 0, text: "walk dog" },
        { id: 1, text: "take out trash" },
        { id: 2, text: "learn typescript" },
        { id: 3, text: "learn docker" }
      ]
    };
  },
  methods: {
    addTodo() {
      const trimmedText = this.newToDoText.trim();
      this.todos.push({ id: this.nextTodoId, text: trimmedText });
      this.nextTodoId++;
      this.newToDoText = "";
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

<style scoped>
.adder {
  display: flex;
}
</style>