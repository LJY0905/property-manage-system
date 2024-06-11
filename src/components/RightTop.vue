<template>
    <!-- right header -->
    <el-icon @click="handleClick">
        <Fold v-if="store.state.isFold" />
        <Expand v-else />
    </el-icon>
</template>
<script setup>
    import { Fold, Expand } from '@element-plus/icons-vue'
    import useRightTop from "../stores/rightTop.js"

    import { useStore } from "vuex"
    // const rightTopStore = useRightTop()
    // console.log(rightTopStore)
    // console.log(rightTopStore.isFold)

    // const handleClick = () => {
    //     rightTopStore.$patch((state) => {
    //         state.isFold = !state.isFold
    //     })
    // }

    const store = useStore()
    const handleClick = () => {
        store.commit("ChangeFold")
    }

</script>

<style scoped lang="scss">
    .el-icon {
        font-size: 20px; //设置图标大小
        margin-top: 20px;
    }
</style>