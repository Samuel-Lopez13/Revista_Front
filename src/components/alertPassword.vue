<script setup>

</script>

<template>
    <div class="contenedor">
        La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial, y tener una longitud mínima de 8 caracteres.
    </div>
</template>

<style scoped>
    .contenedor{
        display: none;

        font-family: Poppins;
        font-size: 9px;
        width: 400px !important;
        height: auto !important;

        position: absolute;
        top: -2px;
        left: 135px;

        background-color: #ffff00 !important;
        color: gray;

        border-radius: 5px;
        padding: 5px;
        padding-left: 20px;
        clip-path: polygon(3% 0, 100% 0, 100% 100%, 3% 100%, 3% 80%, 0 60%, 3% 40%);
    }
</style>