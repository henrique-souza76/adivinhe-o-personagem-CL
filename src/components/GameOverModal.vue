<template>
<div id="backdrop">
    <div id="main-modal">
        <div id="top"><h1>{{text}}</h1></div>
        <div id="bottom">
            <div id="button-div">
                <small-button :retry="true" />
                <small-button :close="true" />
            </div>
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
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.329);
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #1F3170, #4289E0 50%);
}

#top {
    width: 100%;
    height: 70px;
    background: linear-gradient(to bottom, #f0f0f0 200%, #dfd0d0);
    background-clip: initial;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

#bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 130px;
    background: linear-gradient(to bottom, #D4AE73, #F4E9D9 110%);
    border-radius: 0 0 5px 5px;
}

#button-div {
    margin: 15% auto;
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>