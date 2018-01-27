<template>
  <el-row>
    <el-col :lg="24" class="login-box">
      <el-row>
        <el-col :lg="6">
          <div>
            账号：
            <el-input
              placeholder="请输入内容"
              v-model="input10"
              clearable>
            </el-input>
          </div>
          <div>
            <div @click="goQuery">密码：</div>
            <el-input
              placeholder="请输入内容"
              v-model="input10"
              clearable>
            </el-input>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col>
      <Banner></Banner>
    </el-col>
  </el-row>
</template>

<script>
  import Banner from '../components/Banner'
  export default {
    data () {
      return {
        input10: ''
      }
    },
    components: {
      Banner
    },
    methods: {
      goQuery () {
        this.$router.push('/QueryDetail')
      }
    }
  }
</script>

<style>
  .login-box{
    position: relative;
    z-index: 99;
    border: 1px solid #007aff;
    padding: 100px 50px;
    background-color: #007aff;
    opacity: .5;
  }
</style>
