<template>
  <!--添加模态框-->
  <Modal
    v-model="modal.flag"
    title="添加亲属"
    @on-ok="ok"
    @on-cancel="cancel">
    <Form :model="formItem" :label-width="80">
      <FormItem label="姓名">
        <Input v-model="formItem.name" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="关系">
        <Select v-model="formItem.ship">
          <Option value="father">父亲</Option>
          <Option value="mother">母亲</Option>
          <Option value="sister">姐妹</Option>
          <Option value="brother">兄弟</Option>
          <Option value="children">子女</Option>
        </Select>
      </FormItem>
      <FormItem label="生日">
        <Row>
          <Col span="11">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.birthday"></DatePicker>
          </Col>
          <!--<Col span="2" style="text-align: center">-</Col>-->
          <!--<Col span="11">-->
          <!--<TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>-->
          <!--</Col>-->
        </Row>
      </FormItem>
      <FormItem label="性别">
        <RadioGroup v-model="formItem.sex">
          <Radio label="m">Male</Radio>
          <Radio label="f">Female</Radio>
        </RadioGroup>
      </FormItem>
      <!--<FormItem label="Checkbox">-->
      <!--<CheckboxGroup v-model="formItem.checkbox">-->
      <!--<Checkbox label="Eat"></Checkbox>-->
      <!--<Checkbox label="Sleep"></Checkbox>-->
      <!--<Checkbox label="Run"></Checkbox>-->
      <!--<Checkbox label="Movie"></Checkbox>-->
      <!--</CheckboxGroup>-->
      <!--</FormItem>-->
      <!--<FormItem label="Switch">-->
      <!--<i-switch v-model="formItem.switch" size="large">-->
      <!--<span slot="open">On</span>-->
      <!--<span slot="close">Off</span>-->
      <!--</i-switch>-->
      <!--</FormItem>-->
      <!--<FormItem label="Slider">-->
      <!--<Slider v-model="formItem.slider" range></Slider>-->
      <!--</FormItem>-->
      <FormItem label="个人简介">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
      <!--<FormItem>-->
      <!--<Button type="primary">Submit</Button>-->
      <!--<Button type="ghost" style="margin-left: 8px">Cancel</Button>-->
      <!--</FormItem>-->
    </Form>
  </Modal>
</template>

<script>
  export default {
    data () {
      return {
        //弹窗表单
        formItem: {
          name: '',
          ship: '',
          sex: '',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        },
      }
    },
    props: ['modal'],
    methods: {
      ok () {
        // this.self.relationship[this.formItem.ship].push(this.formItem);
        this.$emit('addPersonal', this.formItem)
      },
      cancel () {

      }
    }
  }
</script>
