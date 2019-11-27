<template>
  <div>
    <el-form ref="mallInfoForm" label-position="left" :model="mallInfoForm" label-width="120px">
      <el-form-item label="开业时间" prop="openDate">
        <ul class="clearfix">
          <li class="pull-left">
            dateType-{{dateType}}-{{mallInfoForm.openDate}}
            <el-select class="width-200" v-model="dateType" placeholder="请选择类型" @change="mallInfoForm.openDate = null">
              <el-option id="type0" label="请选择类型" value=""></el-option>
              <el-option id="type1" label="年" value="year"></el-option>
              <el-option id="type2" label="年月" value="month"></el-option>
              <el-option id="type3" label="年月日" value="date"></el-option>
            </el-select>
            <el-date-picker
              v-model="mallInfoForm.year"
              align="right" type="year" value-format="yyyy"
              placeholder="选择年">
            </el-date-picker>
            <el-date-picker
              v-model="mallInfoForm.month"
              type="month" value-format="yyyy-MM"
              placeholder="选择年月">
            </el-date-picker>
            <el-date-picker
              v-model="mallInfoForm.date"
              type="date" value-format="yyyy-MM-dd"
              placeholder="选择年月日">
            </el-date-picker>

            <!--            <el-select class="width-200" v-model="dateType" placeholder="请选择类型" @change="mallInfoForm.openDate = null">
                          <el-option id="type0" label="请选择类型" value=""></el-option>
                          <el-option id="type1" label="年" value="year"></el-option>
                          <el-option id="type2" label="年月" value="month"></el-option>
                          <el-option id="type3" label="年月日" value="date"></el-option>
                        </el-select>
                      <template v-if="dateType === 'year'">
                        <el-date-picker
                          v-model="mallInfoForm.year"
                          align="right" type="year" value-format="yyyy"
                          placeholder="选择年"></el-date-picker>
                      </template>
                      <template v-if="dateType === 'month'">
                        <el-date-picker
                          v-model="mallInfoForm.month"
                          type="month" value-format="yyyy-MM"
                          placeholder="选择年月"></el-date-picker>
                      </template>
                      <template v-if="dateType === 'date'">
                        <el-date-picker
                          v-model="mallInfoForm.date"
                          type="date" value-format="yyyy-MM-dd"
                          placeholder="选择年月日"></el-date-picker>
                      </template>-->
          </li>
        </ul>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'openDate',
  watch: {
    dateType (newVal, oldVal) {
      console.log('number has changed: ', newVal, oldVal)
    },
    mallInfoForm: {
      handler: function (newVal, oldVal) {
        console.log('mallInfoForm: ', newVal)
      },
      deep: true
    },
    'mallInfoForm.year': {
      handler: function (newVal, oldVal) {
        console.log('mallInfoForm.year: ', newVal)
      }
    },
    getDate: {
      handler: function (newVal1, oldVal2) {
        console.log('getDate: ', newVal1, oldVal2)
      }
    }
  },
  computed: {
    getDate: function () {
      return this.mallInfoForm.date
    }
  },
  data () {
    return {
      dateType: null,
      mallInfoForm: {
        openDate: 1,
        year: '2019',
        month: '2019-11',
        date: '2019-11-27'
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
