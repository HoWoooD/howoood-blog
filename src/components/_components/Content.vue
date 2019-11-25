<template>
    <div class="content__wrapper">
        <div class="content">
            <h2>Добро пожаловать!</h2>
            <p>Данный проект разрабатывается в целях обучения и закрепления знаний.</p>
            <p>
                В идеале хочется каждый день по чуть-чуть добавлять контента и функциональности к данному сайту.
                Сейчас целью является глубокое изучения фреймворка Vue.
            </p>
            <p>
                В дальнейшем разместить данный проект на хостинг. И поддерживать и развивать. Добавляю посты и другие проекты.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style scoped>
    .content__wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .content {
        width: 666px;
        height: 666px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        background: #FFFFFF;
        margin: 20px 0;
        padding: 16px;
    }
</style>