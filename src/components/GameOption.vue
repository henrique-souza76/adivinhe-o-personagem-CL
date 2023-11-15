<template>
    <button @click="action">{{ text }}</button>
</template>
<script>
export default {
    name: 'GameOption',
    props: {
        text: String,
        action: Function
    }
}
</script>
<style scoped>
button {
    width: 500px;
    height: 30px;
    background-color: #203172;
    border: none;
    box-shadow: 2px 3px 0 #15204d;
    border-radius: 5px;
    color: #f0f0f0;
    font-size: 15px;
    cursor: pointer;
}

button:active {
    transform: scale(0.95);
}

@media (max-width: 390px){
    button {
        width: 300px;
    }
}

@media (min-width: 391px) and (max-width: 1070px){
    button {
        width: 370px;
    }
}
</style>