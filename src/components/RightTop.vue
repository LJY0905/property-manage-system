<template>
    <!-- right header -->
    <el-icon @click="handleClick">
        <Fold v-if="rightTopStore.isFold" />
        <Expand v-else />
    </el-icon>
</template>
<script setup>
    import { Fold, Expand } from '@element-plus/icons-vue'
    import useRightTop from "../stores/rightTop.js"
    const rightTopStore = useRightTop()
    // console.log(rightTopStore)
    // console.log(rightTopStore.isFold)

    const handleClick = () => {
        rightTopStore.$patch((state) => {
            state.isFold = !state.isFold
        })
    }
</script>

<style scoped lang="scss">
    .el-icon {
        font-size: 20px; //设置图标大小
        margin-top: 20px;
    }
</style>