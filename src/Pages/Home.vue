<template>
    <div class="page">
        <header-block></header-block>
        <content-block></content-block>
    </div>
</template>

<script>
    import HeaderBlock from "../components/Header"
    import ContentBlock from "../components/_components/Content"
    export default {
        name: "Home",
        components: { HeaderBlock, ContentBlock}
    }
</script>

<style scoped>

</style>