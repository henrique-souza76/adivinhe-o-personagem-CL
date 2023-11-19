<template>
    <div id="main">
        <div id="options">
            <game-option text="Adivinhar Pelas Falas" :action="() => redirectToGame1()" />
            <game-option text="Adivinhar Pelas Skins" :action="() => redirectToGame2()" />
            <game-option text="Adivinhar Pelas Habilidades" :action="() => redirectToGame3()" />
        </div>
    </div>
</template>
<script>
import GameOption from '@/components/GameOption.vue'

export default {
    name: 'HomeGames',
    data() {
        return {
            isModalVisible: false
        }
    },
    components: {
        GameOption
    },
    methods: {
        redirectToGame1() {
            this.$router.push({name: 'game1'})
        },
        redirectToGame2() {
            this.$router.push({name: 'game2'})
        },
        redirectToGame3() {
            this.$router.push({name: 'game3'})
        }
    }
}
</script>
<style scoped>
#main {
    width: 100%;
}

#options {
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 40px;
  margin: 0 auto;
}
</style>