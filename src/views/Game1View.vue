<template>
  <div id="main">
    <div id="game-box">
      <div id="box-header">
        <span id="link"><small-button :close="true" /></span>
        <span>{{ challenge }}/{{ challenges.length }}</span>
      </div>
      <div id="div-voice-line">
        <voice-line-box :voiceline="voiceline" />
      </div>
      <div id="div-options-list">
        <options-list :imgs="imgs" :rightAnswer="right_option" @mistake="gameOver" @hit="gameContinue" />
      </div>
    </div>
    <game-over-modal v-show="showGameOverModal" text="DERROTA" receiver="game1"/>
    <game-over-modal v-show="showGameWinnerModal" text="VITÓRIA" receiver="game1"/>
  </div>
</template>
<script>
import db from '../../database/voicelines.json'
import VoiceLineBox from '@/components/VoiceLineBox'
import OptionsList from '@/components/OptionsList'
import GameOverModal from '@/components/GameOverModal.vue'
import SmallButton from '@/components/SmallButton.vue'

export default {
  name: 'Game1',
  components: {
    VoiceLineBox,
    OptionsList,
    GameOverModal,
    SmallButton
  },
  data() {
    return {
      voicelinesList: null,
      challenges: [],
      challenge: 0,
      voiceline: null,
      options: null,
      right_option: null,
      imgs: [],
      showGameOverModal: false,
      showGameWinnerModal: false,
      audioWinner: false,
      audioLoss: false,
      audioBtn: false,
    }
  },
  methods: {
    setupVoiceLinesList() {
      this.voicelinesList = db.voicelines
    },
    setupChallenges() {
      for(let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * this.voicelinesList.length)

        this.challenges.push(this.voicelinesList[randomIndex])
        this.voicelinesList.splice(randomIndex, 1)
      }
    }, 
    setupVoiceLines() {
      this.voiceline = this.challenges[this.challenge].voiceline
    },
    setupOptions() {
      this.options = this.challenges[this.challenge].options
      this.right_option = this.challenges[this.challenge].rightoption
    },
    setupImgs() {
      this.imgs = []

      setTimeout(() => 
      this.options.map((item) => {
          this.imgs.push({
              link: process.env.BASE_URL + "heroes_portrait/" + item + ".png",
              name: item
          })}), 300)
    },
    setupAudios() {
      this.audioWinner = new Audio(process.env.BASE_URL + "audio/winner-sound.mp3")
      this.audioLoss = new Audio(process.env.BASE_URL + "audio/loss-sound.mp3")
      this.audioBtn = new Audio(process.env.BASE_URL + "audio/button-sound.wav")

      this.audioWinner.load()
      this.audioLoss.load()
      this.audioBtn.load()
    },
    gameOver() {
      this.playAudio(this.audioLoss)
      this.showGameOverModal = true
    },
    gameContinue() {
      this.challenge += 1
      if(this.challenge === this.challenges.length) {
        this.playAudio(this.audioWinner)
        this.showGameWinnerModal = true
      } else {
        this.playAudio(this.audioBtn)
        this.updateGameState()
      }
    },
    updateGameState() {
      this.setupVoiceLines()
      this.setupOptions()
      this.setupImgs()
    },
    playAudio(audio) {
      audio.play()
    }
  },
  created() {
    this.setupVoiceLinesList()
    this.setupChallenges()
    this.updateGameState()
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
  background-image: url('@/assets/login_battlepass02.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

#game-box {
  position: absolute;
  background-image: url('@/assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  min-width: 350px;
  width: 500px;
  min-height: fit-content;
  height: 40vh;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

#link {
  font-weight: bolder;
  font-size: 30px;
  text-decoration: none;
}

#box-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
  margin-bottom: 5px;
  color: white;
}

#div-options-list {
  position: absolute;
  bottom: 10%;
}

@media(orientation: portrait) and (max-width: 800px) {
  #game-box {
    height: 55vw;
  }
}

@media(orientation: portrait) and (min-width: 800px) and (max-width: 1070px) {
  #game-box {
    height: 30vw;
  }
}

@media (min-width: 391px) and (max-width: 1070px) and (orientation: landscape) {
  #game-box {
    height: 65vh;
  }
}

@media (min-width: 360px) and (max-width: 800px) and (orientation: portrait) {
  #game-box {
    width: 80vw;
  }
}

@media(max-width: 390px) {
  #game-box {
    min-width: 300px;
    height: 30vh;
  }
}

</style>