<template>
    <section id="main">
        <h1>Dungeon and Dragons</h1>
        <h3>Liste des classes de personnages</h3>
        <div v-for="perso in personnages" id="perso" v-bind:key="perso.index" >
            <ul id="liste">
                <li id="element">{{ perso.index }} : {{ perso.class }}</li>
            </ul>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "Game",
    data() {
        return {
            personnages: null
        }
    },
    mounted(){
    axios
      .get('http://www.dnd5eapi.co/api/spellcasting')
      .then(response => {this.personnages = response.data.results})
  }
}
</script>

<style>
#main {
    margin-bottom: 5%;
}
#main h1 {
    color: red;
}

</style>
