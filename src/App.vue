<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
// import { mapState } from 'vuex'
const { mapActions } = createNamespacedHelpers('coreFirst') // 定义模块
export default {
  name: 'App',
  mounted() {
    // this.$store.dispatch('coreFirst/coreFirst2')
    this.coreFirst2()
    console.log(this.$store.state)
    console.log(this.$store.state.coreFirst.stateCoreFirst)
  },
  methods: {
    ...mapActions(['coreFirst2'])
  },
  mutations: {
  }

}
</script>
