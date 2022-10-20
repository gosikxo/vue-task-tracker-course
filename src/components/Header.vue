<template>
    <header>
        <h1>{{title}}</h1>
        <Button />
    </header>
</template>

<script>
import Button from './Button.vue';

export default {
    name: "Header",
    props: {
        title: String
    },
    components: { Button }
}
</script>
<!-- Scoped means that it's only for this specific component -->
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
}
</style>