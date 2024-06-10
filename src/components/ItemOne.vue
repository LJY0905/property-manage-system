<template>
    <div>
        <h2>人数统计</h2>
        <div class="one" id="chartone">
            容纳后期的图表
        </div>
    </div>
</template>

<script setup>

    import { inject, onMounted, reactive } from 'vue'
    import link from '../api/link.js'

    let data = reactive({})
    let xdata = reactive([])
    let ydata = reactive([])

    let echartsItem = inject("echarts")
    onMounted(() => {
        var myChart = echartsItem.init(document.getElementById('chartone'))
        link('http://localhost:3000/chartDataOne').then(ok => {
            let { data } = ok
            // console.log(data)
            xdata = data.map(item => item.num)
            ydata = data.map(item => item.title)


            // 绘制图表
            myChart.setOption({
                xAxis: {
                    type: 'value',
                },
                yAxis: {
                    type: 'category',
                    data: ydata
                },
                series: [
                    {
                        type: 'bar',
                        data: xdata,
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 20, 20, 0],
                                color: new echartsItem.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: "#005eaa"
                                    },
                                    {
                                        offset: 0.5,
                                        color: "#339ca8"
                                    },
                                    {
                                        offset: 1,
                                        color: "#cda819"
                                    },
                                ])
                            }
                        }
                    }
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

    .one {
        /* 高度360 */
        height: 4.5rem;
        background-color: aliceblue;
    }
</style>