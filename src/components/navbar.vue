<template>
    <nav class="navbar navbar-expand-lg">
        <div class="title1 container-fluid">
            <h1 class="title__h1"><b>Revista App</b></h1>
        </div>
        <div class="detalles collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/acerca" class="nav-link">Artículos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/servicios" class="nav-link">Contacto</router-link>
              </li>
             </ul>
          </div>
          <div>
            <img src="../assets/icons/perfil.png">
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

.title__h1 {
    margin: 0;
    font-family: Poppins;
    font-weight: bold;
    font-size: 32px;
    color: #0062FF;
}
</style>
