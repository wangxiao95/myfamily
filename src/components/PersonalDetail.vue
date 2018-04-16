<template>
  <div class="personal-detail">
    <div class="inner-box">
      <!--头像-->
      <div class="photo-box">
        <img src="../assets/img/1.jpg" alt="">
      </div>
      <!--个人信息-->
      <div class="info">
        <span class="info-item">{{userName}}</span>
        <span class="info-item">{{age}}</span>
        <span class="info-item">{{birthday}}</span>
      </div>
      <!--操作-->
      <div class="btns">
        <ButtonGroup size="large">
          <Button type="ghost">添加亲属</Button>
          <Button type="ghost">编辑信息</Button>
          <Button type="ghost">更多</Button>
        </ButtonGroup>
      </div>
      <!--个人简介-->
      <div class="detail">
        <Card :bordered="false">
          <p class="title" slot="title">个人简介</p>
          <p>{{detail}}</p>
        </Card>
      </div>
      <!--生平事件-->
      <Card class="things">
        <p class="title" slot="title">
          <Icon type="ios-film-outline"></Icon>
          生平事件
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
          <Icon type="ios-loop-strong"></Icon>
          添加
        </a>
        <Scroll :height="200" :on-reach-bottom="handleReachBottom">
          <ul>
            <li class="item" v-for="item in things">
              {{item.content}}
            </li>
          </ul>
        </Scroll>
      </Card>
      <!--相册-->
      <Card class="pics">
        <p class="title" slot="title">
          <Icon type="ios-film-outline"></Icon>
          个人相册
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
          <Icon type="ios-loop-strong"></Icon>
          添加
        </a>
        <div class="pic-box">
          <img v-for="item in pics" :src="item.src" :alt="item.name">
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '王晓',
      age: '24',
      birthday: '1995/08/08',
      detail: '已经在webpack中配置了，所以这里不需要引入任何less文件。\n' +
      '在style中声雷锋精神法拉。 注意： scoped的作用仅仅是限定css的作用域，防止变量污染。\n' +
      '这样就可以根据less的语法使用了。\n' +
      ' \n' +
      '\n' +
      '补充：通过下面的代码就不难理解问什么scoped可以隔离作用域了。 即给不同组件的所有html添加一个属性，然后在css中使用属性选择器来防止作用域的污染，实在聪明！！！\n' +
      '\n',
      things: [
        {id: 1, content: 'sklfslkfsaf;lasf'},
        {id: 2, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
        {id: 3, content: 'sklfslkfsaf;lasf'},
      ],
      pics: [
        {src: '/static/img/1.6175ac3.jpg', name: '照片1'},
        {src: '/static/img/1.6175ac3.jpg', name: '照片2'},
        {src: '/static/img/1.6175ac3.jpg', name: '照片1'},
        {src: '/static/img/1.6175ac3.jpg', name: '照片2'}
      ]
    }
  },
  methods: {
    handleReachBottom () {
      // return new Promise(resolve => {
      //   setTimeout(() => {
      //     const last = this.things[this.things.length - 1];
      //     for (let i = 1; i < 11; i++) {
      //       this.things.push(last + i);
      //     }
      //     resolve();
      //   }, 2000);
      // });
    }
  }
}
</script>

<style scoped lang="less">
.personal-detail{
  /*margin: 20px 0;*/
  width: 30%;
  float: left;
  border: 1px solid #dddee1;
  background: #f8f8f9;
  .inner-box{
    width: 90%;
    margin: auto;
    .photo-box{
      display: flex;
      justify-content:center;
      align-items: center;
      width: 100%;
      height: 100px;
      img{
        width: 80px;
        height: 80px;
      }
    }
    .info{
      height: 40px;
      .info-item{
        margin-right: 10px;
      }
    }
    .detail{
      padding: 20px;
      margin: 20px auto;
      background: #eee;
      .title{
        display: flex;
        justify-content:left;
        align-items: center;
      }
      /*.detail-body{*/
      /*padding: 0 10px;*/
      /*}*/
    }
    .things{
      margin: auto;
      .title{
        display: flex;
        justify-content:left;
        align-items: center;
      }
      .item{
        list-style: none;
        text-align: left;
        text-decoration: underline;
      }
    }
    .pics{
      margin: 20px auto;
      .title{
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #1c2438;
        font-weight: 700;
        text-align: left;
      }
      .pic-box{
        display: flex;
        justify-content:left;
        align-items: center;
        margin: auto;
        img{
          width: 80px;
          height: 80px;
          margin-right: 10px;
          border: 1px solid #dddee1;
        }
      }
    }
  }
}
</style>
