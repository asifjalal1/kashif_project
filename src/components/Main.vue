<template>
  <Header />
  <Home />
  <Footer />
  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div id="preloader"></div>
</template>
<script setup>
import Header from "./Header.vue"
import Home from "./Home.vue"
import Footer from "./Footer.vue"
// import Swiper from 'swiper';
import { onMounted, nextTick } from 'vue';

  function toggleScrollTop(scrollTop) {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  
  // function initSwiper() {
  //   document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
  //     let config = JSON.parse(
  //       swiperElement.querySelector(".swiper-config").innerHTML.trim()
  //     );

  //     if (swiperElement.classList.contains("swiper-tab")) {
  //       initSwiperWithCustomPagination(swiperElement, config);
  //     } else {
  //       new Swiper(swiperElement, config);
  //     }
  //   });
  // }
  
  onMounted(() => {
      nextTick(() => {
        const preloader = document.querySelector('#preloader');
        if (preloader) {
          window.addEventListener('load', () => {
            preloader.remove();
          });
        }
  
        let scrollTop = document.querySelector('.scroll-top');
  
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
  
        window.addEventListener('load', toggleScrollTop(scrollTop));
        document.addEventListener('scroll', toggleScrollTop(scrollTop));
  
        
        // let skillsAnimation = document.querySelectorAll('.skills-animation');
        // skillsAnimation.forEach((item) => {
        //   new Waypoint({
        //     element: item,
        //     offset: '80%',
        //     handler: function (direction) {
        //       let progress = item.querySelectorAll('.progress .progress-bar');
        //       progress.forEach(el => {
        //         el.style.width = el.getAttribute('aria-valuenow') + '%';
        //       });
        //     }
        //   });
        // });
  
        // window.addEventListener("load", initSwiper);
      });
  });
</script>
<style scoped></style>
