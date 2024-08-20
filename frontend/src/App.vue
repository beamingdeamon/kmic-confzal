<template>
  <div id="app" >
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
export default {
  name: 'App',
  components:{
    MainLayout,
    AuthLayout
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  }
}
</script>
<style lang="sass">
html
  margin: 0 !important
  padding: 0
  body
    margin: 0 !important
    padding: 0
  
</style>