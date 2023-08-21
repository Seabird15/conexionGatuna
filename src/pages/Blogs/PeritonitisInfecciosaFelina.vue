<script setup>
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
</script>

<template>
  <NavBar />
  <!--Banner-->
  <section>
    <div class="">
      <!--Imagen Banner-->
      <div>
        <img
          src="../../assets/2gatosServicios.png"
          alt=""
          class="w-full h-[45rem]"
        />
      </div>
    </div>
  </section>
  <!--Banner-->
  <!--Contenido-->
  <section class="container mt-[100px]">
    <div class="w-full">
      <h1
        class="text-[#6c016e97] text-2xl md:text-6xl font-extrabold md:font-bold text-center"
      >
        Titulo
      </h1>
      <p
        class="text-base font-[500px] text-[#686868] text-center m-auto md:w-4/5 mt-[100px]"
      >
        Contenido parrafo
      </p>
      <!--Contenedor Imagen-->
      <div class="mt-[100px] flex justify-center">
        <img src="../../assets/quemiras.png" alt="imagen-contenido" />
      </div>
    </div>
  </section>
  <!--Contenido-->
  <Footer />
</template>