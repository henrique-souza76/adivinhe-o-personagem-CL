<template>
    <button v-show="retry" @click="reloadPage">↻</button>
    <button v-show="close" @click="redirectToHome">←</button>
</template>
<script>
export default {
    name: 'SmallButton',
    props: {
        retry: Boolean,
        close: Boolean
    },
    methods: {
        reloadPage() {
            location.reload()
        },
        redirectToHome() {
            this.$router.push({name: "home"})
        }
    }
}
</script>
<style scoped>
button {
    width: 35px;
    height: 35px;
    border: none;
    background-color: #3F85DD;
    border-radius: 10px;
    color: #f0f0f0;
    font-size: 16px;
    cursor: pointer;
}
</style>