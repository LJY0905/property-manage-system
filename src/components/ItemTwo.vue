<template>
    <div>
        <h2>每日访客统计</h2>
        <div class="two" id="charttwo">
            容纳后期的图表
        </div>
    </div>
</template>

<script setup>

    import { inject, onMounted, reactive } from 'vue'
    import link from '../api/link.js'

    let echartsItem = inject("echarts")
    onMounted(() => {
        var myChart = echartsItem.init(document.getElementById('charttwo'))
        link('http://localhost:3000/chartDataTwo').then(ok => {
            console.log(ok)
            myChart.setOption({
                xAxis: {
                    type: "category",
                    data: ok.data.day,
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    }
                },

                tooltip: {},
                yAxis: {
                    type: "value",
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    }
                },
                grid: {
                    left: "1%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true

                },
                series: [
                    {
                        type: "line",
                        name: "外卖",
                        data: ok.data.num.外卖,
                        stack: "Total",
                        smooth: true,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echartsItem.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgb(128,255,165)"
                                },
                                {
                                    offset: 1,
                                    color: "rgb(1,191,236)"
                                }
                            ])
                        },
                        lineStyle: {
                            width: 0
                        }
                    },
                    {
                        type: "line",
                        name: "快递",
                        data: ok.data.num.快递,
                        stack: "Total",
                        smooth: true,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echartsItem.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgb(0,221,255)"
                                },
                                {
                                    offset: 1,
                                    color: "rgb(77,119,255)"
                                }
                            ])
                        },
                        lineStyle: {
                            width: 0
                        }
                    },
                    {
                        type: "line",
                        name: "一般访客",
                        data: ok.data.num.一般访客,
                        stack: "Total",
                        smooth: true,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echartsItem.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgb(55,162,255)"
                                },
                                {
                                    offset: 1,
                                    color: "rgb(116,21,219)"
                                }
                            ])
                        },
                        lineStyle: {
                            width: 0
                        }
                    },
                    {
                        type: "line",
                        name: "授权访客",
                        data: ok.data.num.授权访客,
                        stack: "Total",
                        smooth: true,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echartsItem.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgb(255,0,134)"
                                },
                                {
                                    offset: 1,
                                    color: "rgb(135,0,157)"
                                }
                            ])
                        },
                        lineStyle: {
                            width: 0
                        }
                    },
                ]
            })
        })

    })


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

    .two {
        /* 高度360 */
        height: 4.5rem;
        background-color: aliceblue;
    }
</style>