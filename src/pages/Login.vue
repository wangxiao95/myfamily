<template>
  <div class="page">
    <div class="login-box">
      <div class="input-box">
        <div class="row">
          <label>用户名:</label>
          <Input v-model="userName" clearable size="large" clearable style="width: 300px" placeholder="请输入用户名"/>
        </div>
        <div class="row">
          <label>密码:</label>
          <Input v-model="password" clearable size="large" clearable style="width: 300px" placeholder="请输入密码"/>
        </div>
        <div class="row">
          <Button type="primary" @click="login">登录</Button>
          <Button type="ghost" @click="register">注册</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userName: '',
        password: ''
      }
    },
    components: {

    },
    methods: {
      login () {
        this.$router.push({path: '/Home'})
      },
      register () {
        // this.$router.push({name: '/register'})
      }
    }
  }
</script>

<style>
  .page{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: url("../assets/img/1.jpg") no-repeat;
  }
  .login-box{
    display: flex;
    justify-content:center;
    /*align-items: center;*/
    width: 30%;
    height: 30%;
    border: 1px solid;
    padding: 30px;
    background: rgba(255,255,255,.2);
    /*opacity: .2;*/
  }
  .row{
    height: 30px;
    margin-top: 30px;
  }
  .row label{
    display: inline-block;
    width: 50px;
    fone-size: 14px;
    text-align: right;
  }

</style>
