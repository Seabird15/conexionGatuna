<template>
  <section class="pt-[70px]">
    <div
      class="md:flex w-full bg-white border-t-2 border-[#6c016e3b] container"
    >
      <div class="md:relative md:w-[20%] w-[80%]">
        <img src="../assets/logo.png" alt="" class="p-7 ml-[5%]" />
      </div>
      <!--Links-->
      <div class="w-2/12 m-auto ml-4">
        <div class="grid grid-cols-1 gap-4 ml-7 md:grid-cols-2">
          <div class="">
            <router-link
              to="/"
              class="text-4 text-[#6D016E] hover:font-bold transition-all"
              >Inicio</router-link
            >
          </div>
          <div>
            <router-link
              to="/quienes-somos"
              class="text-4 text-[#6D016E] hover:font-bold transition-all"
              >Quienes Somos</router-link
            >
          </div>
          <div>
            <router-link
              to="/servicios"
              class="text-4 text-[#6D016E] hover:font-bold transition-all"
              >Servicios</router-link
            >
          </div>
          <div>
            <a
              href="#"
              class="text-4 text-[#6D016E] hover:font-bold transition-all font-bold"
              >Ir Arriba 🔝</a
            >
          </div>
        </div>
      </div>
      <div class="container m-auto w-[80%] md:w-4/12">
        <p class="text-[#6D016E] text-xl font-600 mb-4 font-bold mt-7">
          Información de contacto
        </p>
        <div class="flex">
          <img
            src="../assets/icons/CorreoFooter.png"
            alt=""
            class="mr-4 h-[5%]"
          />
          <p class="mb-3 text-base">info@conexiongatuna.cl</p>
        </div>
        <div class="flex">
          <img src="../assets/icons/Mapa.png" alt="" class="mr-4 h-[5%]" />
          <p class="text-base">Santiago, Chile</p>
        </div>
        <div class="my-7">
          <a
            href="https://wa.me/message/SSVBZVSLDXRJO1"
            class="p-4 my-4 border-solid rounded-full border-1 uppercase bg-[#6D016E] text-white font-700 shadow-xl hover:bg-white hover:text-[#6D016E] transition-all"
          >
            Agenda Aquí
          </a>
        </div>
      </div>
      <!--Links-->
    </div>
    <div class="w-full bg-[#6D016E] p-7">
      <!--Iconos redes-->
      <div class="flex justify-center space-x-5">
        <a href="https://web.facebook.com/conexiongatuna.medicinafelina"
          ><img
            src="../assets/icons/FaceFooter.png"
            alt=""
            class="transition-all hover:scale-125 w-[3rem]"
        /></a>
        <a href="https://www.instagram.com/conexiongatuna.medicinafelina/"
          ><img
            src="../assets/icons/InstaFooter.png"
            alt=""
            class="transition-all hover:scale-125 w-[3rem]"
        /></a>
        <a href="https://wa.me/message/SSVBZVSLDXRJO1"
          ><img
            src="../assets/icons/Wsp.png"
            alt=""
            class="transition-all hover:scale-125 w-[3rem]"
        /></a>
      </div>
    </div>
  </section>
</template>