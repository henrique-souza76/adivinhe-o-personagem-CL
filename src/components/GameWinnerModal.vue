<template>
<div id="backdrop">
    <div id="main-modal">
        <h1>VITÓRIA</h1>
        <div id="return-button-div">
            <RouterLink to="/" id="return-button">RETORNAR À TELA INICIAL</RouterLink>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'GameWinnerModal'
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

#return-button-div {
    margin: 20% auto;
}

#return-button {
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    color: #000;
}
</style>