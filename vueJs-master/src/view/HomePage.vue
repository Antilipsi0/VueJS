<template>
  <div class="main">
    <Header/>
    <Description/>
    <Footer/>
  </div>
</template>

<script>

import Header from './../components/Header.vue'
import Description from './../components/Description.vue'
import Footer from './../components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    Description,
    Footer
  }
}

</script>

<style>

</style>
