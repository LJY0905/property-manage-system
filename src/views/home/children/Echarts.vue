<template>
    <div>
        <!-- 大容器 -->
        <section class="container">
            <!-- 左容器 -->
            <section class="itemLeft">
                <Ip>
                    <template #main>
                        <ItemOne />
                    </template>
                </Ip>
                <Ip>
                    <template #main>
                        <ItemTwo />
                    </template>
                </Ip>
            </section>

            <!-- 右容器 -->
            <section class="itemRight">
                <Ip>
                    <template #main>
                        <ItemThree />
                    </template>
                </Ip>
                <Ip>
                    <template #main>
                        <ItemFour />
                    </template>
                </Ip>
            </section>
        </section>
    </div>
</template>
<script setup>
    import Ip from '../../../components/ItemPage.vue'
    import ItemOne from '../../../components/ItemOne.vue'
    import ItemTwo from '../../../components/ItemTwo.vue'
    import ItemThree from '../../../components/ItemThree.vue'
    import ItemFour from '../../../components/ItemFour.vue'
</script>

<style lang="scss">

    // 主体容器样式
    .container {
        // 这里就不需要设置使用rem了 使用rem那么页面就会根据html根结点大小改变而改变了
        width: 100%;
        margin: 0 auto;
        background-color: white;
        display: flex;

        .itemLeft,
        .itemRight {
            flex: 1;
        }

    }
</style>