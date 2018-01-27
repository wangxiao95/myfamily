<template>
  <el-row>
    <el-col :lg="24">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/img/1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/img/2.jpeg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/img/1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/img/2.jpeg" alt=""></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    data () {
      return {

      }
    },
    methods: {
      swiperInit () {
        new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
          effect : 'fade'
        })
      }
    },
    mounted() {
      this.swiperInit();
    }
  }
</script>

<style>
  @import url("../assets/style/lib/swiper.min.css");
  .swiper-slide img{
    width: 100%;
  }
</style>
