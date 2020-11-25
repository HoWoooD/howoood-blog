<template>
    <layout>
        <content-block></content-block>
    </layout>
</template>

<script>
    import ContentBlock from "../components/_components/Content";
    import Layout from "../components/Layout";
    export default {
        name: "Home",
        components: {Layout, ContentBlock}
    }
</script>

<style scoped>

</style>