<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2">
          <img class="logo" src="/path/to/logo.png" alt="Logo">
        </div>
        <div class="col-lg-8 text-center">
          <h1 class="logo-text">palmerozky</h1>
        </div>
        <div class="col-lg-2 text-end">
          <p class="small-text">Iniciar sesión</p>
          <p class="small-text">¿No tienes cuenta? Regístrate</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: black;
  color: white;
  padding: 20px;
}

.logo {
  height: 50px;
}

.logo-text {
  font-size: 36px;
}

.small-text {
  font-size: 12px;
}
</style>