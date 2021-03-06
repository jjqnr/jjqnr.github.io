var template = '<template> <a class="tab-item" v-link="{path: path, activeClass: \'active\', replace: true}"> <span class="icon" :class="iconClass"></span> <span class="tab-label" v-text="label"></span></a> </template>';

Vue.component('BarItem', {
  template,
  props: {
    path: '',
    icon: '',
    label: ''
  },
  computed: {
    iconClass () {
      return `icon-${this.icon}`
    }
  }
})
