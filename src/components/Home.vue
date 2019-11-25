<template>
    <div class="page">
        <header-block></header-block>
        <content-block></content-block>
    </div>
</template>

<script>
    import HeaderBlock from "./_components/Header"
    import ContentBlock from "./_components/Content"
    export default {
        name: "Home",
        components: { HeaderBlock, ContentBlock}
    }
</script>

<style scoped>

</style>