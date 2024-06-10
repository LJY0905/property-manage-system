<template>
    <div>
        <div class="item">
            <!-- 设置插槽 -->
            <slot name="main"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
    .item {
        /* 高度410px */
        height: 5.125rem;
        border: 1px solid blue;
        /* 外边距20px */
        margin: 0.25rem;
        background-color: rgba(29, 138, 255, 0.851);
    }
</style>