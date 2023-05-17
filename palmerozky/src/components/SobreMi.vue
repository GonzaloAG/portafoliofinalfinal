<template>
    <div class="sobre-mi">
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-md-6">
              <div class="photo">
                <img src="../assets/yo.jpg" alt="Foto de perfil">
              </div>
            </div>
            <div class="col-md-6">
              <h2>Sobre mí</h2>
              <div class="description">
                <p>Mi nombre es [Nombre].</p>
                <p>Soy [Profesión] con experiencia en [Área].</p>
                <p>Estoy apasionado por [Intereses] y disfruto [Actividades].</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .sobre-mi {
    padding: 120px 0; /* Aumenta el padding vertical para mayor altura */
    background-color: black;
    height: auto; /* Ajusta la altura automáticamente según el contenido */
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .content {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 60px; /* Aumenta el padding para mayor tamaño */
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center; /* Centra verticalmente el contenido */
  }
  
  .photo {
    margin-right: 30px;
    max-width: 100%; /* Establece el ancho máximo */
    max-height: 400px; /* Establece la altura máxima */
    overflow: hidden; /* Oculta cualquier parte de la imagen que exceda el tamaño máximo */
  }
  
  .photo img {
    max-width: 100%; /* Limita el ancho máximo de la imagen al tamaño del contenedor */
    height: auto;
    border-radius: 8px; /* Agrega bordes redondeados a la imagen */
  }
  
  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .description {
    margin-bottom: 20px;
  }
  
  p {
    font-size: 16px;
    line-height: 1.6;
  }
  </style>