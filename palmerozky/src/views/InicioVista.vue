<template>
  <main>
    <div>
      <CarruselVista></CarruselVista>
    </div>
    <div>
      <SobreMi></SobreMi>
    </div>
  </main>
</template>

<script>
import SobreMi from "@/components/SobreMi.vue";
import CarruselVista from "../components/CarruselVista.vue";

export default {
  components: {
    CarruselVista,
    SobreMi
}
};
</script>

<style scoped>
main{
  background-color: black!important;;
}
</style>