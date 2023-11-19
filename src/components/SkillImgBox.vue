<template>
    <div>
        <img :src="src">
    </div>
</template>
<script>
export default {
    name: 'SkillImgBox',
    props: {
        src: String,
    }
}
</script>
<style scoped>
img {
    border: 2px solid rgba(255, 255, 255, 0.555);
    border-radius: 50%;
}
</style>