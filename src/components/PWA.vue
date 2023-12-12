<!-- PWAPrompt.vue -->
<template>
    <div v-if="shown">
      Adicionar App à Área de Trabalho?
  
      <button @click="installPWA">
        Instalar!
      </button>
  
      <button @click="dismissPrompt">
        Não, obrigado.
      </button>
    </div>
</template>
  
<script>
export default {
    data: () => ({
      shown: false,
    }),
  
    beforeMount() {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()
        this.installEvent = e
        this.shown = true
      })
    },
  
    methods: {
      dismissPrompt() {
        this.shown = false
      },
  
      installPWA() {
        this.installEvent.prompt()
        this.installEvent.userChoice.then((choice) => {
          this.dismissPrompt() // Hide the prompt once the user's clicked
          if (choice.outcome === 'accepted') {
            // Do something additional if the user chose to install
          } else {
            // Do something additional if the user declined
          }
        })
      },
    }
}
</script>