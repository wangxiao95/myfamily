<template>
  <el-row>
    <el-col>
      <div id="chart-container"></div>
    </el-col>
  </el-row>
</template>

<script>
  import orgChart from 'orgchart'

  export default {
    data () {
      return {
        chartData: {
          'name': 'Lao Lao',
          'title': 'general manager',
          'children': [
            { 'name': 'Bo Miao', 'title': 'department manager' },
            { 'name': 'Su Miao', 'title': 'department manager',
              'children': [
                { 'name': 'Tie Hua', 'title': 'senior engineer' },
                { 'name': 'Hei Hei', 'title': 'senior engineer',
                  'children': [
                    { 'name': 'Pang Pang', 'title': 'engineer' },
                    { 'name': 'Xiang Xiang', 'title': 'UE engineer' }
                  ]
                }
              ]
            },
            { 'name': 'Yu Jie', 'title': 'department manager' },
            { 'name': 'Yu Li', 'title': 'department manager' },
            { 'name': 'Hong Miao', 'title': 'department manager' },
            { 'name': 'Yu Wei', 'title': 'department manager' },
            { 'name': 'Chun Miao', 'title': 'department manager' },
            { 'name': 'Yu Tie', 'title': 'department manager' }
          ]
        }
      }
    },
    methods: {
      chartInit () {
        let data = this.chartData;
        let oc = $('#chart-container').orgchart({
          'data' : data,
          'nodeContent': 'title',
          'pan': true,
          'zoom': true
        });
      }
    },
    mounted () {
      this.chartInit();
      $(document).on('click', '.node', function (e) {
        e.preventDefault();
        console.log(this)
      })
    }
  }
</script>

<style>
  @import "../assets/style/lib/jquery.orgchart.css";
</style>
