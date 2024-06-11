<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="!store.state.isFold" @open="handleOpen"
        @close="handleClose" router>
        <template v-for="item in router.options.routes[2].children" :key="item.path">
            <el-sub-menu :index="item.path" v-if="item.children">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item-group v-for="subitem in item.children" :key="subitem.path">
                    <el-menu-item :index="subitem.path">{{ subitem.meta.title }}</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item :index="item.path" v-else>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <template #title>{{ item.meta.title }}</template>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script setup>
    import { ref } from 'vue'
    import { Menu as IconMenu } from '@element-plus/icons-vue'
    import { useRouter } from 'vue-router';

    // import useRightTop from "../stores/rightTop.js"
    // const rightTopStore = useRightTop()
    import { useStore } from 'vuex'
    const router = useRouter()
    const store = useStore()
    // console.log(router.options.routes[2].children[0].path)
    console.log(router.options.routes[2].children[0].meta.icon)
    const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
    }
</script>