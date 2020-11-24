<template>
    <div class="layout">
        <header-block></header-block>
        <slot></slot>
    </div>
</template>

<script>
    import HeaderBlock from "./Header";
    export default {
        name: "Layout",
        components: { HeaderBlock}
    }
</script>

<style scoped>

</style>