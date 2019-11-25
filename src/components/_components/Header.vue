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
        background: #000000;
        align-items: center;
    }
    .logo {
        font-size: 20px;
        font-weight: bold;
        color: #FFFFFF;
        margin-left: 16px;
    }
    .menu {
        display: flex;
        margin-left: auto;
        margin-right: 16px;
        color: #FFFFFF;
    }
    .menu__item {
        margin-left: 8px;
    }
</style>