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
            <p>
                <b>21.11.20</b> Сегодня понял, что знаний html, css не хватает для быстрой верстки. Из-за отсутствия практики все забыл. Прохожу бесплатный курс по основам.
            </p>
            <div class="posts_wrapper">
                <div v-for="post in posts" :key="post.id">
                    <post :post="post"></post>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Post from '../Post'
    export default {
        name: "Content",
        components: { Post },
        data: function () {
            return {
                posts: [
                    {
                        id: 3,
                        title: 'Повторить HTMl,CSS'
                    },
                    {
                        id: 1,
                        title: 'Изучение основ Vue.js'
                    },
                    {
                        id: 2,
                        title: 'Изучение Vuex'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .content__wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .content {
        width: 50%;
        background: #FFFFFF;
        margin: 20px 0;
        padding: 16px;
    }
    .posts_wrapper {

    }
</style>