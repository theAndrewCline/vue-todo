<template>
    <li>
        {{ todo.text }}
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