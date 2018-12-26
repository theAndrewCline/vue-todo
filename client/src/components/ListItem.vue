<template>
    <li>
        {{ todo.text }}
        <button @click="$emit('removeTodo', todo.id)">x</button>
    </li>
</template>

<script>

export default  {
    props: {
        todo: {
            type: Object, 
            required: true
        }
    }
}
</script>

<style scoped>
</style>