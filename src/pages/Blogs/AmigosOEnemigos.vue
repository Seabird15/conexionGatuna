<script setup>
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";

import ContenidoAmigosoEnemigos from "../Blogs/ContenidoAmigosoEnemigos.vue";
</script>

<template>
  <NavBar />
  <!--Banner-->
  <section>
    <div class="">
      <div>
        <img src="../../assets/BannerBlog1.png" alt="" class="w-full" />
      </div>
    </div>
  </section>
  <!--Banner-->
  <!--Contenido-->
  <ContenidoAmigosoEnemigos />
  <!--Contenido-->
  <Footer />
</template>

<style scoped></style>
