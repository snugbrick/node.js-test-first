<template>
  <!--<div v-html="<h1>aaaaaaaaa </h1>"></div>--><!--傻逼Vsc非得加一个空格，加了还报错--><!--插值绑定-->
  <div :class="a" :title="title">
    aaaaaaaaaaaaaaaa<!--属性绑定简写-->
  </div>
  <div id="clickT"><!--事件绑定简写-->
    <h1 @click.ctrl="clickCtrl" @click.exact="ToggleEvent">aaaaaaaaaaaaa</h1>
  </div>
  <!--下面是单选框 <v-model>实现radio和radioContent的双向绑定-->
  <input id="re" type="radio" value="re" v-model="radioContent">
  <label for="re">A.re</label>

  <h1>{{ obj.pro }}</h1>

  <div id="firDiv"></div>

  <a href="javascript:void(alert('Warning!!!'))">点我!</a>

  <color-vue color="#f78"></color-vue>
</template>

<script>
export default {
  name: 'App',
  components: {
    'color-vue': {
      props: {//属性
        text: String,

        color: {
          type: String,
          default: '#000',
        }
      },
      msg: "aaaaaaaaaaaaaaaaaa",
      store: function () {
        console.log(this.msg)
      },
      store2: () => {
        console.log(this.msg)
      }
    }
  },
  data() {
    return {
      fileContent: '',
      radioContent: '',
      obj: {}
    };
  },
  methods: {
    clickCtrl(event) {
      if (!event.clickCtrl) {
        console.log("you ctrl online!");
      }
    },
    ToggleEvent() {
      Object.assign(this.obj, {
        pro: "test win",
      })
      document.getElementById("firDiv").innerHTML = "woc";
      console.log("test win");

      var text = '{"site":"www.cess.com"}';
      var a = JSON.parse(text);
      console.log(a);
      //this.$set(this.obj, 'pro', 'this is a app');
      new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log("First");
          resolve();
          reject();
        }, 1000);
      }).then(function () {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            console.log("Second");
            resolve();
          }, 4000).catch(function (error) {
            reject();
            console.log(error);
          });
        });
      }).then(function () {
        setTimeout(function () {
          console.log("Third");
        }, 3000);
      });

      setTimeout(function () {
        document.getElementById("firDiv").innerHTML = "hi im async target"
        console.log("hi im async target")
      }, 3000)
      
    },
  }
}

</script>