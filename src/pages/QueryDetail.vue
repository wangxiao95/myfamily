<template>
  <div>
    <el-row :gutter="10">
      <el-col :lg="6">
        个人信息
      </el-col>
      <el-col :lg="17" type="flex" >
        <Chart></Chart>
      </el-col>
    </el-row>
    <!--<Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>-->
    <Button type="success" @click="goPage">查看svg</Button>
  </div>
</template>

<script>
  import Chart from '../components/Chart'

  export default {
    components: {
      Chart
    },
    data () {
      return {
        value: ''
      }
    },
    methods: {
      goPage () {
        this.$router.push({name: 'svgDemo'})
      }
    }
  }
</script>

<style>
</style>
