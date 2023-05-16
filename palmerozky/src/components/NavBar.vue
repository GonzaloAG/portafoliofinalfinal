<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="height: 60px;">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" style="background-color: #343a40;">
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
    background-color: #343a40;
  }
  
  .navbar-dark .navbar-nav .nav-link {
    color: white;
  }
  
  .navbar-dark .navbar-nav .nav-link.active {
    background-color: darkred;
  }
  
  .navbar-dark .navbar-nav {
    background-color: #343a40;
  }
  
  .navbar-dark .navbar-nav .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 767px) {
    .navbar-collapse {
      justify-content: center;
    }
  
    .navbar-toggler {
      order: -1;
    }
  }
  </style>