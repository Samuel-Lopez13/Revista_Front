<script setup>
import navbar from "@/components/navbar.vue";
</script>

<template>
  <div class="contenedor">
    <navbar> </navbar>
    <main>
        <div class="row justify-content-center align-items-center">
            <div class="datosRevista col">
              <h1>Revista Electrónica de Investigación Científica</h1>
              <p>
                La Revista Electrónica de Investigación Científica de la Universidad
                Autónoma de Campeche (UAC) es un medio académico de acceso abierto
                con un sólido proceso de revisión por pares. Con un compromiso con
                la excelencia en la divulgación científica, la revista ofrece una
                plataforma para la publicación de investigaciones de alta calidad en
                diversas áreas del conocimiento.
              </p>
              <button class="btn btn-primary">Subir artículo</button>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <img src="../assets/icons/logo.png" alt="Logo">
            </div>
          </div>
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
  padding: 45px;
}

h1 {
    margin: 0;
    font-family: Poppins;
    font-weight: bold;
    font-size: 32px;
    color: #323D66;
}

h5{
    margin: 0;
    font-family: Poppins;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
}

.datosRevista{
    width: 1091px;
}




</style>