<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/') }" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/contenido') }" to="/contenido">Contenido</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/mediakit') }" to="/mediakit">Mediakit</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/tienda') }" to="/tienda">Tienda</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/contacto') }" to="/contacto">Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      isActive(route) {
        return this.$route.path === route;
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: black;
  }
  
  .navbar-dark .navbar-nav .nav-link {
    color: white;
  }
  
  .navbar-dark .navbar-nav .nav-link.active {
    background-color: darkred;
  }
  </style>