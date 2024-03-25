<template>
  <div></div>
  <h1 id="vm1" @click="setMount">abc</h1>>
</template>

<script>
import { VueElement } from 'vue';

let vm1 = new VueElement({
  data() {
    return {
      msg: 'hi'
    }
  }
})
let mounter = function () {
  vm1.$mount('#vm1')
}

export default {
  name: 'app-container',
  components: {},//vue组件
  props: {},//定义组件特性
  data() {//数据选项
    return {
      msg: {
        num: '114514',
        name: 'jack',
    };
  },
  watch: {
    msg: {
      deep: true,
      Immediate: true,
    },
    'meg.sendMeg': ['msg']//数组方法
  },//对象被修改时调用的方法
  computed: {//计算属性，对属性进行调整
    msgUpper() {
      return this.msg.toUpperCase;
    }
  },
  methods: {
    setMount() {
      mounter
    }
  },//方法
  created() { },//实例创建后
  mounted() { }//挂载
};
</script>
<style lang="scss" scoped></style>