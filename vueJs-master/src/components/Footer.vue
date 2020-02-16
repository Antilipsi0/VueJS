<template>
    <footer>
        <p id="ecole">IIM A2 DW1</p>
        <p id="membres">MORALDI | DUPEY | CORNIQUET</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    footer {
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        justify-content: space-between;
    }

    #ecole {
        padding-left: 2vw;
    }

    #membres {
        padding-right: 2vw;
    }

</style>