<template>
    <div id="content">
        <h1><span>ADIVINHE</span> <br> O PERSONAGEM</h1>
    </div>
</template>
<script>
    export default {
        name: 'HomeTitle'
    }
</script>
<style scoped>
#content {
    color: #555;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    background: linear-gradient(to bottom, #f0f0f0 200%, #dfd0d0);
    background-clip: initial;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1.5px #333;
    text-shadow: 2px 2px 2px #33333386;
}

span {
    margin-left: 100px;
}

span::after {
    content: url('@/assets/logo-cl.png');
    position: relative;
    top: -10px;
}

@media (max-width: 390px) {
    #content {
        font-size: 17px;
    }

    span {
        margin-left: 0px;
    }
    
    span::after {
        top: -15px;
        left: 5px;
    }
}

@media (min-width: 391px) and (max-width: 1070px) and (orientation: landscape) {
    #content {
        font-size: 25px;
    }
}

@media (min-width: 391px) and (max-width: 1070px) and (orientation: portrait) {
    #content {
        font-size: 20px;
    }

    span::after {
        left: -15px;
    }
} 

@media(min-width: 392px) and (max-width: 420px) {
    #content {
        font-size: 18px;
    }
}

</style>