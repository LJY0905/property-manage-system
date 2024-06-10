<template>
    <!-- home -->
    <div class="common-layout">
        <el-container>
            <el-aside width="auto">
                <Lm />
            </el-aside>
            <el-container>
                <el-header>
                    <Rt />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
    import Lm from "../../components/LeftMenu.vue"
    import Rt from "../../components/RightTop.vue"

</script>

<style lang="scss">
    .common-layout {
        .el-aside {
            background-color: #D9ECFF;
        }

        .el-header {
            background-color: #C6E2FF;
        }

        .el-main {
            background-color: #ECF5FF;
        }
    }

    .el-aside,
    .el-container,
    .common-layout,
    #app,
    body,
    html {
        height: 100%;
    }
</style>