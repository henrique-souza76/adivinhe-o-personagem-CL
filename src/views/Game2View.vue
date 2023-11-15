<template>
  <div id="main">
    <div id="game-box">
      <div id="skin">
        <img :src="skin_link" :class="scaleClass">
      </div>
      <div id="input">
        <input 
        type="text" 
        list="champions" 
        placeholder="Digite o nome do personagem..." 
        v-model="input_champion"
        @keydown.enter="checkAnswer"
        >
        <datalist id="champions">
          <option v-for="champion in championsList" :value="champion"></option>
        </datalist>
        <button type="submit" v-on:click="checkAnswer">Confirmar</button>
      </div>
      <div id="health-bar">
        <img v-for="heart in health_points" :src="health_point_link" alt="Coração Azul">
      </div>
      <span id="link"><small-button :close="true"/></span>
    </div>
    <game-over-modal v-show="showGameOverModal" text="DERROTA"/>
    <game-over-modal v-show="showGameWinnerModal" text="VITÓRIA"/>
  </div>
</template>
<script>
import db from '../../database/champions.json'
import GameOverModal from '@/components/GameOverModal.vue'
import SmallButton from '@/components/SmallButton.vue'

export default {
  components: {
    GameOverModal,
    SmallButton
  },
  data() {
    return {
      skinsList: db.champions,
      selectedChampion: null,
      skins_options: null,
      selectedSkin: null,
      skin_link: null,
      championsList: null,
      input_champion: "",
      showGameOverModal: false,
      showGameWinnerModal: false,
      health_points: [1, 1, 1, 1, 1],
      health_point_link: process.env.BASE_URL + "extra_media/" + "coracao-azul.png",
      scaleClass: "scale9",
      audioWinner: false,
      audioLoss: false
    }
  },
  methods: {
    setupSkin() {
      const randomIndex = Math.floor(Math.random() * this.skinsList.length)

      this.selectedChampion = this.skinsList[randomIndex]
      this.skins_options = this.selectedChampion.skins

      const randomSkinIndex = Math.floor(Math.random() * this.skins_options.length)

      this.selectedSkin = this.skins_options[randomSkinIndex]
      this.skin_link = process.env.BASE_URL + "heroes_skins/" + this.selectedSkin + ".jpg"
    },
    setupChampionsList() {
      this.championsList = this.skinsList.map((value) => value.name)
    },
    checkAnswer() {
      if(!this.input_champion) return
      else if(this.input_champion.toLowerCase() === this.selectedChampion.name.toLowerCase()) {
        this.input_champion = ""
        this.audioWinner.play()
        this.showGameWinnerModal = true
      } else {
        this.health_points.pop()
        this.input_champion = ""
        if(!this.health_points.length) {
          this.showGameOverModal = true
          this.audioLoss.play()
        } else {
          this.setupSkinScale()
        }
      }
    },
    setupSkinScale() {
      switch(this.health_points.length) {
        case 4: this.scaleClass = "scale8"; break;
        case 3: this.scaleClass = "scale7"; break;
        case 2: this.scaleClass = "scale6"; break;
        case 1: this.scaleClass = "scale5"; break;
        default: break;
      }
    },
    setupAudios() {
      this.audioWinner = new Audio(process.env.BASE_URL + "audio/winner-sound.mp3")
      this.audioLoss = new Audio(process.env.BASE_URL + "audio/loss-sound.mp3")

      this.audioWinner.load()
      this.audioLoss.load()
    }
  },
  created() {
    this.setupSkin()
    this.setupChampionsList()
    this.setupAudios()
  }
}
</script>
<style scoped>
#main {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/torre_argente_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

#game-box {
  position: absolute;
  min-width: 350px;
  width: 500px;
  min-height: fit-content;
  height: 60vh;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
}

#skin {
  overflow: hidden;
  width: 500px;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scale9 {
  transform: scale(8.5);
}

.scale8 {
  transform: scale(7.25);
}

.scale7 {
  transform: scale(6);
}

.scale6 {
  transform: scale(4.75);
}

.scale5 {
  transform: scale(3.5);
}

#input {
  display: flex;
  align-items: center;
}

input {
  width: 350px;
  height: 25px;
}

button {
  height: 100%;
  border: none;
  background-color: rgb(151, 219, 48);
  color: white;
  padding: 2px;
  border-radius: 0 5px 5px 0;
  font-weight: bold;
  cursor: pointer;
}

button:active {
  filter: brightness(1.5);
}

#health-bar {
  display: flex;
  align-items: center;
  width: fit-content;
}

#health-bar > img {
  width: 40px;
}

#link {
  position: absolute; bottom: 5px; right: 5px;
}

@media(orientation: portrait) and (max-width: 800px) {
  #game-box {
    height: 90vw;
  }

  #skin {
    width: 85vw;
    height: 60vw;
  }

  #input {
    max-width: 100%;
  }
}

@media(orientation: portrait) and (min-width: 800px) and (max-width: 1070px) {
  #game-box {
    height: 50vw;
    width: 70vw;
  }

  #skin {
    height: 40vw;
    width: 70vw;
  }
}

@media (min-width: 391px) and (max-width: 1070px) and (orientation: landscape) {
  #game-box {
    height: 85vh;
  }

  #skin {
    height: 60vh;
  }
}

@media (min-width: 360px) and (max-width: 799px) and (orientation: portrait) {
  #game-box {
    width: 90vw;
  }

  #skin {
    width: 90vw;
  }
}

@media(max-width: 390px) {
  #game-box {
    min-width: 300px;
    height: 40vh;
  }
}

@media(max-width: 375px) and (orientation: portrait) {
  #game-box {
    height: 55vh;
  }

  #skin {
    height: 40vh;
  }
}
</style>