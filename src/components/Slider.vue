<template>
  <section>
    <div>
      <div class="slider">
        <transition name="fade" mode="out-in">
          <div class="slider-container" :key="currentIndex">
            <div class="slider-track">
              <div>
                <img
                  :src="slides[currentIndex].img"
                  alt="Slide"
                  class="w-full sm:h-[40rem] h-auto"
                />
              </div>
            </div>
          </div>
        </transition>
        <div class="relative ml-[8%] space-x-4 md:space-x-7">
          <button
            class="md:w-auto w-[15%] p-4 -mt-7 bg-[#6D016E] text-white rounded-full hover:bg-[#6c016ebc]"
            @click="prevSlide"
          >
            <img src="../assets/image11.svg" alt="" class="md:w-auto" />
          </button>
          <button
            class="md:w-auto w-[15%] p-4 -mt-7 bg-[#6D016E] text-white rounded-full hover:bg-[#6c016ebc]"
            @click="nextSlide"
          >
            <img src="../assets/image10.png" alt="" class="md:w-auto" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  data() {
    return {
      currentIndex: 0,
      totalSlides: 4,
      progress: 100,
      slideClass: "",
      progressInterval: null,
      slideDuration: 8000, //duracion del slide

      slides: [
        {
          img: "https://i.ibb.co/fxbrwFx/Slider1-1692493648711-29.webp",
        },
        {
          img: "https://i.ibb.co/LpY8Yqh/slider2-1692494305313-2.webp",
        },
        {
          img: "https://i.ibb.co/C1Px40f/slider3-1692494305319-49.webp",
        },
        {
          img: "https://i.ibb.co/v4fzBTM/slider4-1692494305319-99.webp",
        },
      ],
    };
  },
  mounted() {
    this.preloadImages();
    this.startProgressBar();
  },

  methods: {
    preloadImages() {
      this.slides.forEach((slide) => {
        const img = new Image();
        img.src = slide.img;
      });
    },

    prevSlide() {
      this.slideClass = "slide-out";
      setTimeout(() => {
        this.currentIndex =
          (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.slideClass = "slide-in";
      }, 100);
    },
    nextSlide() {
      this.slideClass = "slide-out";
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.startProgressBar();
        this.slideClass = "slide-in";
      }, 100);
    },
    startProgressBar() {
      this.progress = 100;
      clearInterval(this.progressInterval);

      this.progressInterval = setInterval(() => {
        if (this.progress > 0) {
          this.progress -= 1;
        } else {
          clearInterval(this.progressInterval);
          this.nextSlide();
        }
      }, this.slideDuration / 100); // Ajusta la velocidad de actualización
    },
  },
};
</script>
  
  <style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.slide-animation {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.slide-in {
  animation-name: slideIn;
}

.slide-out {
  animation-name: slideOut;
}
</style>
  