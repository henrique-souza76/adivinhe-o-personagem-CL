<template>
    <button v-show="retry" @click="reloadPage">↻</button>
</template>
<script>
export default {
    name: 'SmallButton',
    props: {
        id: Number,
        levelSelect: Boolean,
        txt: String,
        retry: Boolean,
        close: Boolean
    },
    methods: {
        reloadPage() {
            location.reload()
        }
    }
}
</script>
<style scoped>
button {
    width: 30px;
    height: 30px;
    border: none;
    background-color: #3F85DD;
    border-radius: 10px;
    color: #f0f0f0;
    font-size: 16px;
    cursor: pointer;
}
</style>