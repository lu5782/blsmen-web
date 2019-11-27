<template>
  <div>
    <div>
      <h5>calendar</h5>
      <div id="calendar">
        <ul>
          <li class="calendar">星期一</li>
          <li class="calendar">星期二</li>
          <li class="calendar">星期三</li>
          <li class="calendar">星期四</li>
          <li class="calendar">星期五</li>
          <li class="calendar">星期六</li>
          <li class="calendar">星期日</li>
        </ul>
        <ul v-if="calendarArr">
          <li class="calendar" v-for="(item,index) in calendarArr.slice(0, 7)" :key="index">{{item.day}}</li><br/>
          <li class="calendar" v-for="(item,index) in calendarArr.slice(7, 14)" :key="7+index">{{item.day}}</li>
          <li class="calendar" v-for="(item,index) in calendarArr.slice(14, 21)" :key="14+index">{{item.day}}</li>
          <li class="calendar" v-for="(item,index) in calendarArr.slice(21, 28)" :key="21+index">{{item.day}}</li>
          <li class="calendar" v-for="(item,index) in calendarArr.slice(28, 35)" :key="28+index">{{item.day}}</li>
          <li class="calendar" v-for="(item,index) in calendarArr.slice(35, 42)" :key="35+index">{{item.day}}</li>
        </ul>
      </div>
    </div>

    <div id="myChart" :style="{width: '500px', height: '400px'}"></div>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
// import calendar from '@/components/utils/calendar.js'
export default {
  name: 'Note',
  methods: {
    init () {
      this.drawLine()
      this.getDate()
    },
    getDate () {
      // let currentDate = new Date()
      // let data = calendar.getYearMonthDay(new Date())

      // console.log(currentDate)
      // console.log(data)
      // console.log(data.year)
      // console.log(data.month)
      // console.log(data.day)
      let firstDay = new Date(new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/01')
      console.log(firstDay)
      let startTime = firstDay - (firstDay.getDay() - 1) * 24 * 60 * 60 * 1000
      console.log(new Date(startTime))
      for (let i = 0; i < 42; i++) {
        this.calendarArr.push({
          date: new Date(startTime + i * 24 * 60 * 60 * 1000),
          year: new Date(startTime + i * 24 * 60 * 60 * 1000).getFullYear(),
          month: new Date(startTime + i * 24 * 60 * 60 * 1000).getMonth() + 1,
          day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate()
        })
      };
      console.log(this.calendarArr)
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
      calendarArr: []
    }
  },
  mounted () {
    this.init()
  }

}
</script>

<style scoped>
.calendar{
  display: inline-block;
  color: red;
}
</style>
