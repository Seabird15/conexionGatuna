<script setup>
import NavBar from "../components/NavBar.vue";
import ContenidoServicios from "../components/ContenidoServicios.vue";
import FooterVue from "../components/Footer.vue";
</script>

<template>
  <NavBar />
  <!--Banner-->
  <section>
    <div class="">
      <div>
        <div class="relative">
          <img
            src="../assets/TitleServicios.png"
            alt=""
            class="absolute md:ml-[10rem] mt-10 md:mt-[10rem] md:w-auto w-[70%] ml-[10%]"
          />
        </div>
        <img src="../assets/imgbanner1.png" alt="" class="w-full" />
      </div>
    </div>
  </section>
  <!--Banner-->
  <!--Contenido -->
  <ContenidoServicios />
  <!--Contenido -->

  <FooterVue />
</template>
