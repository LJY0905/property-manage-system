<template>
    <div>
        <h2>人数统计</h2>
        <div class="four" id="chartfour">
        </div>
    </div>
</template>

<script setup>
    import { inject, onMounted, reactive } from 'vue'
    import link from '../api/link.js'

    let echartsItem = inject("echarts")
    onMounted(() => {
        var myChart = echartsItem.init(document.getElementById('chartfour'))
        link('http://localhost:3000/chartDataFour').then(ok => {
            let data = ok.data
            console.log(data)
            myChart.setOption({
                grid: {
                    top: "3%",
                    left: "1%",
                    bottom: "3%",
                    right: "6%",
                    containLabel: true

                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                xAxis: {
                    type: "category",
                    data: data.day,
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    }
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    }
                },
                series: [
                    {
                        type: "bar",
                        data: data.num.一般用户,
                        stack: "total"
                    },
                    {
                        type: "bar",
                        data: data.num.月租用户,
                        stack: "total"
                    },
                    {
                        type: "bar",
                        data: data.num.特殊车辆,
                        stack: "total"
                    }
                ]
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

    .four {
        /* 高度360 */
        height: 4.5rem;
        background-color: aliceblue;
    }
</style>