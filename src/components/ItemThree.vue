<template>
    <div>
        <h2>报修统计</h2>
        <div class="three" id="chartthree">
        </div>
    </div>
</template>

<script setup>

    import { inject, onMounted, reactive } from 'vue'
    import link from '../api/link.js'

    let echartsItem = inject("echarts")
    onMounted(() => {
        var myChart = echartsItem.init(document.getElementById('chartthree'))
        link('http://localhost:3000/chartDataThree').then(ok => {
            console.log(ok)
            myChart.setOption({
                legend: { top: "bottom" },
                tooltip: {},
                series: [
                    {
                        type: "pie",
                        data: ok.data,
                        radius: [10, 100],
                        center: ["50%", "45%"],
                        roseType: "area"
                    },
                ],
            });
        });
    });



</script>

<style scoped>
    h2 {
        /* 48像素 */
        /* height: 0.6rem; */
        color: #fff;
        /* line-height: 0.6rem; */
        text-align: center;
        /* font-size: 0.25rem; */

    }

    .three {
        /* 高度360 */
        height: 4.5rem;
        background-color: aliceblue;
    }
</style>