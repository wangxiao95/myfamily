<template>
  <div class="main">
    <Header></Header>
    <Menu></Menu>
    <Crumbs></Crumbs>
    <router-view/>
    <Footer class="layout-footer-center footer">2011-2016 &copy; TalkingData</Footer>
  </div>

</template>

<script>
  import Menu from '@/components/Menu'
  import Header from '@/components/Header'
  import Crumbs from '@/components/Crumbs'
  export default {
    data () {
      return {

      }
    },
    components: {
      Menu,
      Header,
      Crumbs
    },
    mounted () {
      console.log(this.$router)
    }
  }
</script>

<style scoped lang="less">
  .main{
    /*height: 100%;*/
  }
  .footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
