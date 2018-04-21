<template>
  <div class="box" id="box">
    <svg :class="svgMouseDown ? 'poi' : ''" preserveAspectRatio="xMinYMin meet" :viewBox="viewBox"
         @mousemove="move" @mousedown="getPoint" @mouseup="moveOff">
      <g v-for="(val, key) in self.relationship">
        <g v-if="!Array.isArray(val)" :transform="getTransform(key)">
          <rect x="0" y="0" rx="5" ry="5" width="150" height="60" :fill="bgColor[val.sex]" @click="test(val.name)"
                style="stroke:black;stroke-width:0;"/>
          <image x="10" y="10" xlink:href="../assets/img/3.jpg" width="40" height="40"/>
          <text x="70" y="25" fill="black">{{val.name}}</text>
          <text x="130" y="25" fill="black">{{sex[val.sex]}}</text>
          <text x="70" y="45" fill="black">{{key}}</text>
          <text x="130" y="45" fill="black">50</text>
          <circle cx="75" cy="60" r="10" stroke="black" stroke-width="0" fill="#fff"/>
          <circle cx="75" cy="60" r="8" stroke="black" stroke-width="0" fill="#5cadff" @click="showModal"/>
          <!--<line x1="70" y1="60" x2="80" y2="60" style="stroke:rgb(255,255,255);stroke-width:2" @click="showModal"/>-->
          <!--<line x1="75" y1="55" x2="75" y2="65" style="stroke:rgb(255,255,255);stroke-width:2" @click="showModal"/>-->
          <path d="M70 60 L80 60 M75 55 L75 65" style="stroke:rgb(255,255,255);stroke-width:2" @click="showModal"></path>
        </g>
        <g v-else v-for="(item, i) in val" :transform="getTransform(key, i)">
          <rect x="0" y="0" rx="5" ry="5" width="150" height="60" :fill="bgColor[item.sex]" @click="test(item.name)"
                style="stroke:black;stroke-width:0;"/>
          <image x="10" y="10" xlink:href="../assets/img/3.jpg" width="40" height="40"/>
          <text x="70" y="25" fill="black">{{item.name}}</text>
          <text x="130" y="25" fill="black">{{sex[item.sex]}}</text>
          <text x="70" y="45" fill="black">{{key}}</text>
          <text x="130" y="45" fill="black">50</text>
          <circle cx="75" cy="60" r="10" stroke="black" stroke-width="0" fill="#fff"/>
          <circle cx="75" cy="60" r="8" stroke="black" stroke-width="0" fill="#5cadff" @click="showModal(item.name)"/>
          <path d="M70 60 L80 60 M75 55 L75 65" style="stroke:rgb(255,255,255);stroke-width:2" @click="showModal"></path>
        </g>
      </g>
    </svg>
    <!--添加亲属modal-->
    <Add-modal :modal="modal" @addPersonal="addPersonal"></Add-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddModal from '../components/AddModal'
export default {
  data () {
    return {
      // svg viewBox 四个属性值
      svgX: 0,
      svgY: 0,
      viewBoxX: 1000,
      viewBoxY: 800,
      //暂存鼠标down的点坐标
      offSetX: 0,
      offSetY: 0,
      //svgMouseDown鼠标按下抬起标志
      svgMouseDown: false,
      //以自己为中心的初始坐标
      x: 400,
      y: 300,
      //背景色
      bgColor: {
        m: '#ffb5e7',
        f: '#a9afe0'
      },
      //性别符号
      sex: {
        m: '♀',
        f: '♂'
      },
      //控制模态框
      modal: {
        flag: false,
        title: ''
      },
      //数据
      self: {
        name: '本人',
        relationship: {
          self: {
            name: '我',
            sex: 'f'
          },
          father: {
            name: '父亲',
            sex: 'f'
          },
          mother: {
            name: '母亲',
            ship: '母亲',
            sex: 'm'
          },
          partner: [
            {name: '伴侣1', ship: '妻子', sex: 'm'},
            {name: '伴侣2', ship: '妻子', sex: 'm'}
          ],
          sister: [
            {name: '姐妹1', ship: '姐妹', sex: 'm'},
            {name: '姐妹2', ship: '姐妹', sex: 'm'},
          ],
          brother: [
            {name: '兄弟1', ship: '兄弟', sex: 'f'},
            {name: '兄弟2', ship: '兄弟', sex: 'f'},
          ],
          children: [
            {name: '儿子', ship: '儿子', sex: 'f'},
            {name: '女儿', ship: '女儿', sex: 'm'}
          ]
        }
      }
    }
  },
  computed: {
    viewBox () {
      return this.svgX + ',' + this.svgY + ',' + this.viewBoxX + ',' + this.viewBoxY;
    }
  },
  methods: {
    ...mapActions([
      'change'
    ]),
    test (name) {
      this.change(name);
      console.log(this.$store.state.crumbs);

    },
    //计算每个item的x坐标
    computedX (key, i) {
      i = i + 1 || 1;
      switch (key) {
        case 'self':
          return this.x;
        case 'father':
          return this.x - 100;
        case 'mother':
          return this.x + 100;
        case 'partner':
          return this.x + 200 * i;
        case 'brother':
          return this.x - 200 * i;
        case 'sister':
          return this.x + this.self.relationship.partner.length * 200 + 200 * i;
        case 'children':
          return this.x + 200 * (i - 1);
      }
    },
    //计算每个item的y坐标
    computedY (key, i) {
      i = i + 1 || 1;
      switch (key) {
        case 'self':
          return this.y;
        case 'father':
          return this.y - 130;
        case 'mother':
          return this.y - 130;
        case 'partner':
          return this.y;
        case 'brother':
          return this.y;
        case 'sister':
          return this.y;
        case 'children':
          return this.y + 130;
      }
    },
    getTransform (key, i) {
      return `translate(${this.computedX(key, i)}, ${this.computedY(key, i)})`;
    },
    showModal () {
      this.modal.flag = true;
    },
    addPersonal (data) {
      console.log(data);
      this.self.relationship[data.ship].push(data);
    },
    move (e) {
      if (this.offSetY != 0) {
        this.svgX = this.offSetX - e.offsetX;
        this.svgY = this.offSetY - e.offsetY;
        // debugger
      }
    },
    getPoint (e) {
      this.svgMouseDown = true;
      this.offSetX = e.offsetX + this.svgX;
      this.offSetY = e.offsetY + this.svgY;
    },
    moveOff () {
      this.offSetY = 0;
      this.svgMouseDown = false;
      // return false;
    },
    // keyMove (e) {
    //   console.log(e);
    //   switch (e.keyCode) {
    //     case 37:
    //       this.svgX --;
    //       break;
    //     case 38:
    //       this.svgY --;
    //       break;
    //     case 39:
    //       this.svgX ++;
    //       break;
    //     case 40:
    //       this.svgY ++;
    //       break;
    //   }
    // }
  },
  watch: {
    t () {
      alert('#ff66cd,#535fbe')
    }
  },
  components: {
    AddModal
  }
}
</script>

<style scoped lang="less">
  .box{
    float: left;
    width: 70%;
    height: 800px;
    padding: 15px 20px;
    background: #fff;
    svg{
      width: 100%;
      height: 100%;
    }
  }
</style>
