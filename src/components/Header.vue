<template>
    <div class="header">
        <div class="logo">HoWoooD Blog</div>
        <div class="menu">
            <div class="menu__item" @click="goToHome()">Home</div>
            <div class="menu__item" @click="goToHome()">Posts</div>
            <div class="menu__item" @click="goToHome()">Contacts</div>
            <div class="menu__item" @click="goToHome()">FAQ</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            goToHome() {
                window.location.href = "/home"
            }
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        height: 60px;
        width: 100%;
        border: 1px solid #CECECE;
        align-items: center;
    }
    .logo {
        font-size: 20px;
        font-weight: bold;
        color: #000000;
        margin-left: 16px;
        cursor: pointer;
    }
    .menu {
        display: flex;
        margin-left: auto;
        margin-right: 16px;
        color: #000000;
    }
    .menu__item {
        margin-left: 24px;
        cursor: pointer;
    }
</style>