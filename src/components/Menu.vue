<template>
  <Menu mode="horizontal" theme="dark" active-name="1" @on-selected="menuChange">
    <div class="layout-logo"></div>
    <div class="layout-nav" v-for="(item, index) in menuList">
      <MenuItem :name="item.name">
        <Icon type="ios-navigate"></Icon>
        {{item.text}}
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [
          {text: '创建图谱', url: '', name: '1'},
          {text: '家族图谱', url: '', name: '2'},
          {text: '系统管理', url: '', name: '3'}
        ]
      };
    },
    methods: {
      menuChange () {
        // alert(1)
      }
    }
  }
</script>

<style>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
