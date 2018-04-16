<template>
  <div class="box" id="box">
    <svg>
      <g v-for="(val, key) in self.relationship">
        <g v-if="!Array.isArray(val)">
          <rect :x="computedX(key)" :y="computedY(key)" rx="5" ry="5" width="150" height="60" :fill="bgColor[val.sex]" @click="test"
                style="stroke:black;stroke-width:0;"/>
          <image :x="computedX(key)+10" :y="computedY(key)+10" xlink:href="../assets/img/3.jpg" width="40" height="40"/>
          <text :x="computedX(key)+70" :y="computedY(key)+25" fill="black">{{val.name}}</text>
          <text :x="computedX(key)+130" :y="computedY(key)+25" fill="black" @click="test">{{sex[val.sex]}}</text>
          <text :x="computedX(key)+70" :y="computedY(key)+45" fill="black" @click="test">{{val.ship}}</text>
          <text :x="computedX(key)+130" :y="computedY(key)+45" fill="black" @click="test">50</text>
          <circle :cx="computedX(key)+75" :cy="computedY(key)+60" r="10" stroke="black" stroke-width="0" fill="#fff"/>
          <circle :cx="computedX(key)+75" :cy="computedY(key)+60" r="8" stroke="black" stroke-width="0" fill="#5cadff" @click="test"/>
          <line :x1="computedX(key)+70" :y1="computedY(key)+60" :x2="computedX(key)+80" :y2="computedY(key)+60" style="stroke:rgb(255,255,255);stroke-width:2" @click="test"/>
          <line :x1="computedX(key)+75" :y1="computedY(key)+55" :x2="computedX(key)+75" :y2="computedY(key)+65" style="stroke:rgb(255,255,255);stroke-width:2" @click="test"/>
        </g>
        <g v-else v-for="(item, i) in val">
          <rect :x="computedX(key, i)" :y="computedY(key, i)" rx="5" ry="5" width="150" height="60" :fill="bgColor[item.sex]" @click="test"
                style="stroke:black;stroke-width:0;"/>
          <image :x="computedX(key, i)+10" :y="computedY(key, i)+10" xlink:href="../assets/img/3.jpg" width="40" height="40"/>
          <text :x="computedX(key, i)+70" :y="computedY(key, i)+25" fill="black">{{item.name}}</text>
          <text :x="computedX(key, i)+130" :y="computedY(key, i)+25" fill="black" @click="test">{{sex[item.sex]}}</text>
          <text :x="computedX(key, i)+70" :y="computedY(key, i)+45" fill="black" @click="test">{{item.ship}}</text>
          <text :x="computedX(key, i)+130" :y="computedY(key, i)+45" fill="black" @click="test">50</text>
          <circle :cx="computedX(key, i)+75" :cy="computedY(key, i)+60" r="10" stroke="black" stroke-width="0" fill="#fff"/>
          <circle :cx="computedX(key, i)+75" :cy="computedY(key, i)+60" r="8" stroke="black" stroke-width="0" fill="#5cadff" @click="test"/>
          <line :x1="computedX(key, i)+70" :y1="computedY(key, i)+60" :x2="computedX(key, i)+80" :y2="computedY(key, i)+60" style="stroke:rgb(255,255,255);stroke-width:2" @click="test"/>
          <line :x1="computedX(key, i)+75" :y1="computedY(key, i)+55" :x2="computedX(key, i)+75" :y2="computedY(key, i)+65" style="stroke:rgb(255,255,255);stroke-width:2" @click="test"/>
        </g>
      </g>
    </svg>
    <button class="pl20" @click="test">test</button>
    <!--<ul>-->
      <!--<li v-for="(v, k) in self.relationship">-->
        <!--{{v}}-->
        <!--&lt;!&ndash;<span v-if="!Array.isArray(v)">{{v}}</span>&ndash;&gt;-->
        <!--&lt;!&ndash;<span v-else v-for="item in v">{{item}}</span>&ndash;&gt;-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      //数据
      self: {
        name: '本人',
        relationship: {
          self: {
            name: '我',
            ship: '自己',
            sex: 'f'
          },
          father: {
            name: '父亲',
            ship: '父亲',
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
          // son: [
          //   {name: '儿子1'},
          //   {name: '儿子2'}
          // ],
          // daughter: [
          //   {name: '女儿1'},
          //   {name: '女儿2'}
          // ]
        }
      }
    }
  },
  computed: {
    fatherX () { return this.x - 50 },
    fatherY () { return this.y + 100 },
    motherX () {

    },
    motherY () {

    }
  },
  methods: {
    test () {

      alert(document.getElementById('box').clientHeight)

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
      }
    }

  },
  watch: {
    t () {
      alert('#ff66cd,#535fbe')
    }
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
