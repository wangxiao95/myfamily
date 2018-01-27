<template>
  <el-row :gutter="10">
    <el-col :lg="6">
      个人信息
    </el-col>
    <el-col :lg="17" type="flex" >
      <Chart></Chart>
    </el-col>
  </el-row>

</template>

<script>
  import Chart from '../components/Chart'

  export default {
    components: {
      Chart
    },
    data () {
      return {

      }
    }
  }
</script>

<style>
</style>
