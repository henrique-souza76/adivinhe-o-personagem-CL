<template>
<div id="backdrop">
    <div id="main-modal">
        <h1>{{text}}</h1>
        <div id="button-div">
            <small-button :retry="true" />
            <small-button :close="true" />
        </div>
    </div>
</div>
</template>
<script>
import SmallButton from '@/components/SmallButton.vue'

export default {
    name: 'GameOverModal',
    props: {
        id: Number,
        text: String
    },
    components: {
        SmallButton
    }
}
</script>
<style scoped>
#backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.459);
    display: flex;
    justify-content: center;
    align-items: center;
}

#main-modal {
    width: 400px;
    height: 200px;
    background-color: white;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.329);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

#button-div {
    margin: 15% auto;
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>