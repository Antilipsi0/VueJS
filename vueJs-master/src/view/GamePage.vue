<template>
  <div class="main">
    <Header/>
    <Game/>
    <Footer/>
  </div>
</template>

<script>
import Header from './../components/Header.vue'
import Game from './../components/Game.vue'
import Footer from './../components/Footer.vue'

export default {
    name: 'ApiPage',
    components: {
        Header,
        Game,
        Footer
    }
}
</script>

<style>

</style>