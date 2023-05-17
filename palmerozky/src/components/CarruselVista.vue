<template>
   <div style="background-color: black; padding-top: 20px;">
    <div id="carouselExampleIndicators" class="carousel slide" style="max-width: 50%; margin: 20px auto 0;">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner" style="position: relative;">
        <div class="carousel-item active">
          <img src="../assets/1675817362364.jpg" class="d-block w-100" alt="No se encontró la imagen">
        </div>
        <div class="carousel-item">
          <img src="../assets/1677039544164.jpg" class="d-block w-100" alt="No se encontró la imagen">
        </div>
        <div class="carousel-item">
          <img src="../assets/1678280094811.jpg" class="d-block w-100" alt="No se encontró la imagen">
        </div>
        <div class="carousel-item">
          <img src="../assets/1679953718469.jpg" class="d-block w-100" alt="No se encontró la imagen">
        </div>
        <div class="carousel-item">
          <img src="../assets/maxresdefault.webp" class="d-block w-100" alt="No se encontró la imagen">
        </div>
        <div class="carousel-background" style="position: absolute; top: 0; left: 0; width: 100vw; height: 100%; background-image: url('../assets/maxresdefault.webp'); background-repeat: repeat; background-size: cover; filter: blur(5px);"></div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>