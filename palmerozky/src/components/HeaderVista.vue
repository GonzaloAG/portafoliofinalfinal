<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/8e4e2e7c-6ea9-4674-a303-a457a6f463ec-profile_image-300x300.png" alt="Logo" />
    </div>
    <h1 class="title">Palmerozky</h1>
    <div class="right-texts">
      <div class="text-container">
        <p class="login-text">Iniciar sesión</p>
      </div>
      <div class="text-container">
        <p class="register-text">¿No tienes cuenta? Regístrate</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.logo img {
  width: 75px;
  height: auto;
  margin-right: 10px;
}

.title {
  color: white;
  text-align: center;
  flex: 1;
  align-self: center;
}

.right-texts {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.text-container {
  margin-bottom: 5px;
}

.right-texts p {
  color: white;
  margin-right: 10px;
}

/* Media queries for responsive design */
@media (max-width: 767px) {
  /* Styles for mobile devices */
  .header {
    justify-content: center;
  }

  .title {
    display: none;
  }

  .right-texts {
    display: none;
  }
}
</style>