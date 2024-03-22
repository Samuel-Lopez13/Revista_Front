<script setup>
import navbar from "@/components/navbar.vue";
</script>

<template>
    <div class="contenedor">
        <header>
            <navbar></navbar>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped>
.contenedor {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    width: 100%;
    height: calc(100% - 98px);
}

h1 {
    margin: 0;
    font-family: Poppins;
    font-weight: bold;
    font-size: 32px;
    color: #323D66;
}

h5 {
    margin: 0;
    font-family: Poppins;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
}
</style>