<script setup>

</script>

<template>
    <main>
        <div class="info__main d-flex justify-content-center align-items-center">
            <div class="datosRevista d-flex flex-column justify-content-center">
                <h3>Revista Electrónica de </h3>
                <h1>Investigación Científica</h1>
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
            <div class="img__datosRevista d-flex justify-content-center align-items-center">
                <img src="../assets/icons/logo.png" alt="Logo">
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    width: 100%;
    height: calc(100% - 98px);
}

h1 {
    margin: 0;
    font-family: Poppins;
    font-weight: bold;
    font-size: 48px;
    color: #323D66;
}

h3{
    margin: 0;
    font-family: Poppins;
    font-weight: normal;
    font-size: 36px;
    color: #323D66;
}

h5 {
    margin: 0;
    font-family: Poppins;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
}

p{
    font-family: Poppins;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
}

.info__main{
    width: 1720px;
    height: 500px;
    border-radius: 15px;
    margin: 10px auto;
    background-color: #EDF4FF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.24);
}

.datosRevista {
    width: 1125px;
    height: 480px;
    gap: 30px;
}

.img__datosRevista{
    width: 450px;
}

button{
    width: 250px;
    height: 45px;
}
</style>