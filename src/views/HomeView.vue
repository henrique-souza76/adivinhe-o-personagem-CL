<template>
  <div id="home">
      <div id="title">
        <home-title />
      </div>
      <div id="games">
        <home-games />
      </div>
  </div>
</template>

<script>
import HomeTitle from '@/components/HomeTitle.vue'
import HomeGames from '@/components/HomeGames.vue'

export default {
  name: 'HomeView',
  components: {
    HomeTitle,
    HomeGames
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/cl_background-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

#title {
  padding-top: 25px;
}

#games {
  margin-top: 150px;
}

@media (max-width: 390px) {
  #title {
    padding-top: 35px;
  }

  #games {
    margin-top: 20vh;
  }
}

@media (min-width: 391px) and (max-width: 1070px) and (orientation: landscape) {
  #games {
    margin-top: 10vh;
  }
}

@media (min-width: 391px) and (max-width: 1070px) and (orientation: portrait) {
  #title {
    padding-top: 5vh;
  }

  #games {
    margin-top: 30vh;
  }
} 

</style>
