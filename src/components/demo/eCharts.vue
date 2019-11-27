<template>
  <div>
    <div>eCharts</div>
    <div id="myChart" :style="{width: '500px', height: '400px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'Note',
  methods: {
    init () {
      this.drawLine()
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '在Vue中使用echarts',
          link: 'http://www.baidu.com',
          subtext: 'From ExcelHome',
          sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis', // 触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'cross' // 默认为直线，可选为：'line' | 'shadow' | 'cross'
          }
        },
        grid: {
          left: 100,
          right: 10,
          top: 100,
          bottom: 40
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '围巾']
        },
        yAxis: {
          // inverse: true, // 反向坐标轴
          type: 'value'
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 60]
        }]
      })
    }},
  data () {
    return {

    }
  },
  mounted () {
    this.init()
  }

}
</script>

<style scoped>

</style>
