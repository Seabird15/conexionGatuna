<script setup>
import NavBar from "../components/NavBar.vue";
import FichaDra from "../components/FichaDra.vue";
import FooterVue from "../components/Footer.vue";
import ContenidoQuienesSomos from "../components/ContenidoQuienesSomos.vue";
</script>

<template>
  <NavBar />
  <!--Banner-->
  <section>
    <div class="">
      <div>
        <div class="relative">
          <img
            src="../assets/titlebanner1.png"
            alt=""
            class="absolute md:ml-[10rem] mt-10 md:mt-[5rem] md:w-auto w-[70%] ml-[10%]"
          />
        </div>
        <img src="../assets/imgbanner1.png" alt="" class="w-full" />
      </div>
    </div>
  </section>
  <!--Banner-->
  <!--Contenido -->
  <ContenidoQuienesSomos />
  <!--Contenido -->
  <!--Ficha-->
  <FichaDra />
  <!--Ficha-->
  <FooterVue />
</template>
