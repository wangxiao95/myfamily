<template>
  <div class="main fix">
    <PersonalDetail></PersonalDetail>
    <SvgCom></SvgCom>
  </div>
</template>

<script>
  import PersonalDetail from '../components/PersonalDetail'
  import SvgCom from '../components/SvgCom'
  export default {
    data () {
      return {

      }
    },
    components: {
      PersonalDetail,
      SvgCom
    }
  }
</script>

<style scoped lang="less">
  .main{
    padding-bottom: 70px;
    background: #f8f8f9;
  }
</style>
