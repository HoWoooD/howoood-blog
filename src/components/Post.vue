<template>
    <div class="post">
        {{post.title}}
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .post {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-top: 10px;
    }
</style>