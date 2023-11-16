<template>
    <div id="list">
        <img v-for="img in imgs" :src="img.link" :alt="img.name" @click="checkAnswer(img.name)">
    </div>
</template>
<script>
export default {
    name: 'OptionsList',
    props: {
        imgs: Array,
        rightAnswer: String
    },
    emits: ["hit", "mistake"],
    methods: {
        checkAnswer(answer) {
            if(answer === this.rightAnswer) {
                this.$emit("hit")
            } else {
                this.$emit("mistake")
            }
        }
    }
}
</script>
<style scoped>
#list {
  display: flex;
  justify-content: space-between;
  min-width: 350px;
  max-width: 500px;
}

img {
    cursor: pointer;
    border-radius: 50%;
    border: 2.5px solid white;
    width: 80px;
    height: 80px;
}

img:hover {
    filter: brightness(125%);
}

@media (min-width: 390px) and (max-width: 800px) and (orientation: portrait) {
    img {
      width: 55px;
      height: 55px;
    }
} 

@media(orientation: landscape) {
    #list {
        width: 500px;
    }
}

@media(orientation: portrait) and (min-width: 810px) {
    #list {
        width: 500px;
    }
}

@media(max-width: 390px) {
    #list {
        min-width: 310px;
        width: 300px;
    }

    img {
        width: 50px;
        height: 50px;
    }
}

</style>