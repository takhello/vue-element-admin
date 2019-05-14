<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('coreFirst')
export default {
  name: 'App',
  mounted() {
    // this.$store.dispatch('coreFirst/coreFirst2')
    this.coreFirst2()
  },
  methods: {
    ...mapActions(['coreFirst2'])
  }

}
</script>
