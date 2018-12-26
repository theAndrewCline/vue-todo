<template>
<div>
    <input type="text" placeholder="add new todo"/>
    <input type="button" value="add todo" @click="clicked" />
</div>

</template>

<script>
    export default {
        methods: {
            clicked () {
                this.$emit('addToDo')
            }
        }

    }
</script>

<style scoped>

</style>