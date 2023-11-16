<template>
    <div id="voice-line-div">{{ voiceline }}</div>
</template>
<script>
export default {
    name: 'VoiceLineBox',
    props: {
        voiceline: String
    }
}
</script>
<style scoped>
#voice-line-div {
  width: fit-content;
  min-height: fit-content;
  max-height: 35vh;
  text-align: center;
  min-height: fit-content;
  font-style: italic;
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

@media (min-width: 360px) and (max-width: 1070px) and (orientation: portrait) {
    #voice-line-div {
        max-width: 300px;
        font-size: 15px;
    }
} 
</style>