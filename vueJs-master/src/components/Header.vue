<template>
    <header>
        <nav>
            <img src="./../assets/logo.png" style="height:70px;">
            <ul>
                <li><router-link to="/" class="a">Accueil</router-link></li>
                <li><router-link to="/game" class="a">Jeux</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>
    header {
        position: sticky;
        top: 0;
        padding: 5px;
    }

    nav {
        margin: 0 auto;
        height: 70px;
        width: 100%;
    }

    nav ul {
        padding: 0px;
        margin: 0px;
        float: right;
        padding-right: 5vw;
    }

    nav li {
        list-style-type: none;
        padding: 0px;
        display: inline;
    }

    nav li .a {
        color: #35495e;
        font-size: 20px;
        text-decoration: none;
        line-height: 70px;
        margin: 5px 15px;
        padding-bottom: 2px;
        font-weight: bold;
    }
    nav li .a:hover {
        border-bottom: 4px solid #41b883;
    }
</style>