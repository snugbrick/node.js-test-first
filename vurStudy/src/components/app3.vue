<template>
  <div v-command.upper>{{ msg }}</div>
  <div v-command.lower>{{ msg }}</div>

  <div>
    <li @click="toggleView('Home')">click me</li>

    <component :is="view"></component>
  </div>
</template>

<script>
let Home = {
  template: '<p>hello template</p>'
}

export default {
  name: 'app3-com',
  components: { Home },
  props: {},
  mixins: [],
  data() {
    return {
      msg: 'hi',

      view: 'Home'
    };
  },
  directives: {
    command(el, binding) {
      let text = el.innerText
      let modi = binding.modifiers
      if (modi.upper) {
        el.innerText = text.toUpperCase()
        console.log('upperCase ed')
      }
      if (modi.lower) {
        el.innerText = text.toLowerCase()
        console.log('LowerCase ed')
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    toggleView(component) {
      this.view = component;
      console.log('toggled')
    }
  },
  created() { },
  mounted() { }
};
</script>
<style lang="scss" scoped></style>