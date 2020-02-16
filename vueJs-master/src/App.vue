<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  margin: 0;
  padding: 0;
}
html {
    font-family: Tahoma;
}
body {
  margin: 0;
}
section {
  padding: 0 10%;
}
h1 {
  margin: 0;
  color: #41b883;
  text-align: center;
  margin-bottom: 1vw;
  font-size: 24px;
}
h2 {
  text-align: center;
}
h3 {
  margin: 0;
  padding: 3vw;
  text-align: justify;
}
</style>
