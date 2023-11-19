<template>
    <div id="main">
        <div id="game-box">
        <div id="box-header">
            <span id="link"><small-button :close="true" /></span>
            <span>{{ challenge }}/{{ skillsLinks.length }}</span>
        </div>
        <div id="div-skill-img">
            <skill-img-box :src="skill"/>
        </div>
        <div id="div-options-list">
            <options-list :imgs="imgs" :rightAnswer="rightOptions[challenge]" @mistake="gameOver" @hit="gameContinue" />
        </div>
        </div>
        <game-over-modal v-show="showGameOverModal" text="DERROTA"/>
        <game-over-modal v-show="showGameWinnerModal" text="VITÓRIA"/>
    </div>
</template>
<script>
import db from '../../database/champions.json'
import SkillImgBox from '@/components/SkillImgBox.vue'
import OptionsList from '@/components/OptionsList.vue'
import GameOverModal from '@/components/GameOverModal.vue'
import SmallButton from '@/components/SmallButton.vue'

export default {
name: 'Game1',
components: {
    SkillImgBox,
    OptionsList,
    GameOverModal,
    SmallButton
},
data() {
    return {
        championsList: [],
        skillOptions: ["p", "1", "2", "3"],
        skillsLinks: [],
        challenge: 0,
        skill: null,
        rightOptions: [],
        options: [],
        imgs: [],
        showGameOverModal: false,
        showGameWinnerModal: false,
        audioWinner: false,
        audioLoss: false,
        audioBtn: false,
    }
},
methods: {
    setupChampionsList() {
        this.championsList = db.champions.map((value) => value.name)
    },
    setupSkillsLinks() {
        this.rightOptions = []
        this.skillsLinks = []

        for(let i = 0; i < 10; i++) {
            const randomIndexChampion = Math.floor(Math.random() * this.championsList.length)
            const randomIndexSkill = Math.floor(Math.random() * this.skillOptions.length)

            this.rightOptions.push(this.championsList[randomIndexChampion])

            this.skillsLinks.push(
                process.env.BASE_URL +
                'heroes_skills/' +
                this.championsList[randomIndexChampion].toLowerCase() +
                this.skillOptions[randomIndexSkill] +
                '.png'
            )
            this.championsList.splice(randomIndexChampion, 1)
        }
    }, 
    setupSkills() {
        this.skill = this.skillsLinks[this.challenge]
    },
    setupOptions() {
        this.setupChampionsList()

        const options = [this.rightOptions[this.challenge]]
        this.championsList.splice(this.championsList.indexOf(this.rightOptions[this.challenge]), 1)

        this.options = []
        

        while(options.length < 5) {
            const randomIndexChampion = Math.floor(Math.random() * this.championsList.length)
            
            options.push(this.championsList[randomIndexChampion])
            this.championsList.splice(randomIndexChampion, 1)
        }
 
        while(options.length) {
            const randomIndexChampion = Math.floor(Math.random() * options.length)

            this.options.push(options[randomIndexChampion])
            options.splice(randomIndexChampion, 1)
        }
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
        if(this.challenge === this.skillsLinks.length) {
            this.playAudio(this.audioWinner)
            this.showGameWinnerModal = true
        } else {
            this.playAudio(this.audioBtn)
            this.updateGameState()
        }
    },
    updateGameState() {
        this.setupSkills()
        this.setupOptions()
        this.setupImgs()
    },
    playAudio(audio) {
        audio.play()
    }
},
created() {
    this.setupChampionsList()
    this.setupSkillsLinks()
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
    background-image: url('@/assets/login_battlepass01.jpg');
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
    color: white;
}

#div-skill-img {
    margin-top: -7px;
}

#div-options-list {
    margin-bottom: -7px;
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