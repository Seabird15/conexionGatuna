<template>
  <!--NavBar Sitio-->
  <div id="app">
    <div class="w-full bg-[#6D016E] h-[4rem]">
      <div class="flex p-4 ml-7">
        <img
          src="../assets/icons/MapaNav.png"
          alt=""
          class="hidden mr-4 ml-7 md:block md:w-5 md:h-6 sm:w-4 sm:h-4"
        />
        <p class="hidden text-white md:text-base font-300 md:block sm:text-xs">
          Atención a domicilio y presencial a pasos de metro Las Rejas
        </p>
        <img
          src="../assets/icons/Correo.png"
          alt=""
          class="hidden mr-4 ml-7 md:block sm:w-4 sm:h-4 md:w-5 md:h-6"
        />
        <p class="hidden text-white md:text-base font-300 md:block sm:text-xs">
          info@conexiongatuna.cl
        </p>
      </div>
      <!--Redes-->
      <div class="flex justify-end -mt-[2.5rem]">
        <a href="https://web.facebook.com/conexiongatuna.medicinafelina"
          ><img
            src="../assets/icons/FaceFooter.png"
            alt=""
            class="md:w-[60%] hidden md:block sm:w-[40%]"
        /></a>
        <a href="https://www.instagram.com/conexiongatuna.medicinafelina/"
          ><img
            src="../assets/icons/InstaFooter.png"
            alt=""
            class="md:w-[60%] hidden md:block sm:w-[40%]"
        /></a>
      </div>
      <!--Redes-->
      <!--Menu Hamburguesa-->
      <div class="relative z-50 block md:hidden">
        <div class="respmenu">
          <a href="/">
            <p
              class="px-2 py-5 mb-4 text-2xl font-extrabold text-transparent uppercase bg-gradient-to-r from-white to-purple-500 bg-clip-text"
            >
              Conexión Gatuna
            </p>
          </a>

          <input type="checkbox" class="cursor-pointer" />
          <i class="fa-solid fa-bars"></i>
          <i class="fas fa-times"></i>
          <nav class="bg-white border-2 border-solid rounded-xl">
            <ul class="gap-4">
              <li
                class="p-2 hover:bg-[#6D016E] cursor-pointer hover:text-white"
              >
                <router-link to="/" class="">Inicio</router-link>
              </li>
              <li
                class="p-2 hover:bg-[#6D016E] cursor-pointer hover:text-white"
              >
                <router-link to="/quienes-somos">Quienes Somos</router-link>
              </li>
              <li
                class="p-2 hover:bg-[#6D016E] cursor-pointer hover:text-white"
              >
                <router-link to="/servicios">Servicios</router-link>
              </li>
              <button
                @click="toggleDropdown"
                class="p-2 text-3 hover:bg-[#6D016E] cursor-pointer hover:text-white flex"
              >
                Blogs <img src="../assets/arrow-down.svg" alt="" />
              </button>
              <div class="flex justify-end p-4">
                <a
                  href="https://wa.me/message/SSVBZVSLDXRJO1"
                  class="text-[#6D016E] font-bold border-solid border-2 border-[#6c016e99] p-2 rounded-full ml-7 shadow-lg hover:bg-[#6D016E] hover:text-white transition-all -mt-4"
                >
                  Agenda Aquí
                </a>
              </div>
              <div
                v-if="dropdownOpen"
                class="absolute py-2 mt-2 bg-white w-[50%] border-[#6D016E] border-solid border-2 rounded-xl"
              >
                <div class="relative z-50 group">
                  <button
                    @click="toggleDropdown('comportamientoFelino')"
                    class="text-[#6D016E] text-left flex text-sm p-2 md:text-lg sm:text-xs hover:font-600 hover:text-[#f380f5]"
                  >
                    Comportamiento Felino
                    <img src="../assets/arrow-down.svg" alt="" />
                  </button>
                  <div
                    v-if="dropdownOpen === 'comportamientoFelino'"
                    class="absolute w-40 p-2 -mt-14 ml-48 bg-white border-[#6D016E] hover:bg-slate-100 border-solid border-2 rounded-xl"
                  >
                    <!-- Opciones del submenu -->
                    <router-link
                      to="/amigos-o-enemigos"
                      class="block text-left px-4 text-sm py-2 text-[#6D016E] hover:font-600 hover:text-[#f380f5]"
                    >
                      ¿Mis gatos son amigos o enemigos?
                    </router-link>
                  </div>
                </div>

                <div class="relative z-50 group">
                  <button
                    @click="toggleDropdown('medicinaFelina')"
                    class="text-[#6D016E] text-left flex text-sm p-2 md:text-lg sm:text-xs hover:font-600 hover:text-[#f380f5]"
                  >
                    Medicina Felina
                    <img src="../assets/arrow-down.svg" alt="" />
                  </button>
                  <div
                    v-if="dropdownOpen === 'medicinaFelina'"
                    class="absolute w-40 p-2 -mt-14 ml-48 bg-white border-[#6D016E] hover:bg-slate-100 border-solid border-2 rounded-xl"
                  >
                    <!-- Opciones del submenu -->
                    <router-link
                      to="/peritonitis-infecciosa-felina"
                      class="block text-left px-4 py-2 text-sm text-[#6D016E] hover:font-600 hover:text-[#f380f5]"
                    >
                      Peritonitis infecciosa felina
                    </router-link>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <!--Menu Hamburguesa-->
    </div>
    <nav class="p-[3rem] bg-white md:block hidden w-full menu-fixed">
      <div class="container flex items-center">
        <div class="w-5/12">
          <div class="flex">
            <img src="../assets/logo.png" alt="" class="w-[20%] m-auto" />
            <h1
              class="text-[#6D016E] md:text-[36px] font-bold m-auto sm:text-lg"
            >
              Medicina Interna Felina
            </h1>
          </div>
        </div>
        <div class="flex justify-end w-7/12 md:space-x-4 sm:space-x-2">
          <router-link
            to="/"
            class="text-[#6D016E] text-4 md:text-lg sm:text-xs hover:font-600 hover:text-[#f380f5] cursor-pointer"
            >Inicio</router-link
          >
          <router-link
            to="/quienes-somos"
            class="text-[#6D016E] text-4 md:text-lg sm:text-xs hover:font-600 hover:text-[#f380f5] cursor-pointer"
            >Quienes Somos</router-link
          >
          <router-link
            to="/servicios"
            class="text-[#6D016E] text-4 md:text-lg sm:text-xs hover:font-600 hover:text-[#f380f5] cursor-pointer"
            >Servicios</router-link
          >
          <div class="relative z-50 group">
            <button
              @click="toggleDropdown"
              class="text-[#6D016E] flex text-4 md:text-lg sm:text-xs hover:font-600 hover:text-[#f380f5]"
            >
              Blogs <img src="../assets/arrow-down.svg" alt="" />
            </button>
            <div
              v-if="dropdownOpen"
              class="absolute w-56 p-2 mt-2 bg-white border-[#6D016E] hover:bg-slate-100 border-solid border-2 rounded-xl"
            >
              <div class="relative z-50 group">
                <button
                  @click="toggleDropdown('comportamientoFelino')"
                  class="text-[#6D016E] text-left flex text-4 md:text-lg sm:text-xs hover:font-600 hover:text-[#f380f5]"
                >
                  Comportamiento Felino
                  <img src="../assets/arrow-down.svg" alt="" />
                </button>
                <div
                  v-if="dropdownOpen === 'comportamientoFelino'"
                  class="absolute w-40 p-2 -mt-14 ml-40 bg-white border-[#6D016E] hover:bg-slate-100 border-solid border-2 rounded-xl"
                >
                  <!-- Opciones del submenu Comportamiento Felino -->
                  <router-link
                    to="/amigos-o-enemigos"
                    class="block text-left px-4 py-2 text-[#6D016E] hover:font-600 hover:text-[#f380f5]"
                  >
                    ¿Mis gatos son amigos o enemigos?
                  </router-link>
                  <!--                  <router-link
                    to="/tipos-de-gato"
                    class="block text-left px-4 py-2 text-[#6D016E] hover:font-600 hover:text-[#f380f5]"
                  >
                    Tipos de gatos
                  </router-link>-->
                </div>
              </div>
              <div class="relative z-50 group">
                <button
                  @click="toggleDropdown('medicinaFelina')"
                  class="text-[#6D016E] text-left flex text-4 md:text-lg sm:text-xs hover:font-600 hover:text-[#f380f5]"
                >
                  Medicina Felina <img src="../assets/arrow-down.svg" alt="" />
                </button>
                <div
                  v-if="dropdownOpen === 'medicinaFelina'"
                  class="absolute w-40 p-2 -mt-14 ml-40 bg-white border-[#6D016E] hover:bg-slate-100 border-solid border-2 rounded-xl"
                >
                  <!-- Opciones del submenu Medicina Felina -->
                  <router-link
                    to="/peritonitis-infecciosa-felina"
                    class="block text-left px-4 py-2 text-[#6D016E] hover:font-600 hover:text-[#f380f5]"
                  >
                    Peritonitis infecciosa felina
                  </router-link>
                  <!--                  <router-link
                    to="/tipos-de-gato"
                    class="block text-left px-4 py-2 text-[#6D016E] hover:font-600 hover:text-[#f380f5]"
                  >
                    Tipos de gatos
                  </router-link>-->
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
              href="https://wa.me/message/SSVBZVSLDXRJO1"
              class="text-[#6D016E] font-bold border-solid border-2 md:text-xl sm:text-xs border-[#6c016e99] p-2 rounded-full ml-7 shadow-lg hover:bg-[#6D016E] hover:text-white transition-all -mt-4"
            >
              Agenda Aquí
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// Define la instancia de Vue
export default {
  data() {
    return {
      dropdownOpen: "", // Inicialmente ningún submenu está abierto
    };
  },
  methods: {
    toggleDropdown(submenu) {
      if (this.dropdownOpen === submenu) {
        this.dropdownOpen = ""; // Cerrar el submenu si ya está abierto
      } else {
        this.dropdownOpen = submenu; // Abrir el submenu indicado
      }
    },
  },
};

// Monta la instancia de Vue en el elemento con el ID 'app'
</script>

<style>
.respmenu input[type="checkbox"],
.respmenu .fa-bars,
.respmenu .fa-times {
  position: absolute;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  right: 0;
  top: 0.8rem;
  width: 48px;
  height: 48px;
}
.respmenu .fa-bars,
.respmenu .fa-times {
  font-size: 48px;
  pointer-events: none;
  color: white;
}
.respmenu input[type="checkbox"] {
  opacity: 0;
}
.respmenu {
  position: relative;
  min-height: 48px;
}
.respmenu nav {
  display: none;
}
.respmenu input:checked ~ nav {
  display: block;
}
.respmenu input:checked ~ .fa-bars {
  display: none;
}

.respmenu input:not(:checked) ~ .fa-times {
  display: none;
}
</style>
