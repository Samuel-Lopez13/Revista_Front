<template>
    <nav class="navbar navbar-expand-lg">
        <div class="title1 container-fluid">
            <h1 class="title__h1"><b>Revista App</b></h1>
        </div>
        <div class="detalles collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/HomePage" class="nav-link">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Articulos" class="nav-link">Artículos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Contacto" class="nav-link">Contacto</router-link>
              </li>
             </ul>
          </div>
          <div>
            <router-link to="/Perfil" class="nav-link"><img src="../assets/icons/perfil.png"></router-link>
        </div>
      </nav>
</template>

<style>
nav {
    width: 100%;
    height: 98px;
}

.navbar{
    padding: 15px 60px;
}

.nav-link{
    color: #0062FF;
    font-size: 18px;
    font-family: Poppins;
    font-weight: normal;
}

.title__h1 {
    margin: 0;
    font-family: Poppins;
    font-weight: bold;
    font-size: 32px;
    color: #0062FF;
}

.detalles{
    margin-right: 30px;
}
</style>

<script setup>
</script>