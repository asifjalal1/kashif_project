<template>
  <Header />
  <Home />
  <Footer />
</template>
<script setup>
import Header from "./Header.vue"
import Home from "./Home.vue"
import Footer from "./Footer.vue"
import Swiper from 'swiper';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import AOS from 'aos';
import { onMounted, nextTick } from 'vue';

  // const scrollTop = ref(0);
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }
  function toggleScrollTop(scrollTop) {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  
  onMounted(() => {
    setTimeout(() => {
      nextTick(() => {
        document.addEventListener('scroll', toggleScrolled);
        window.addEventListener('load', toggleScrolled);
        document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
          navmenu.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
          });
        });
        const preloader = document.querySelector('#preloader');
        if (preloader) {
          // window.addEventListener('load', () => {
            preloader.remove();
          // });
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
        window.addEventListener('load', aosInit);
  
        document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
          carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
            if (index === 0) {
              carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
            } else {
              carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
            }
          });
        });
  
        document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
          let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
          let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
          let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
  
          let initIsotope;
          imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
            initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
              itemSelector: '.isotope-item',
              layoutMode: layout,
              filter: filter,
              sortBy: sort
            });
          });
  
          isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
            filters.addEventListener('click', function () {
              isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
              this.classList.add('filter-active');
              initIsotope.arrange({
                filter: this.getAttribute('data-filter')
              });
              if (typeof aosInit === 'function') {
                aosInit();
              }
            }, false);
          });
  
        });
        let skillsAnimation = document.querySelectorAll('.skills-animation');
        skillsAnimation.forEach((item) => {
          new Waypoint({
            element: item,
            offset: '80%',
            handler: function (direction) {
              let progress = item.querySelectorAll('.progress .progress-bar');
              progress.forEach(el => {
                el.style.width = el.getAttribute('aria-valuenow') + '%';
              });
            }
          });
        });
  
        window.addEventListener("load", initSwiper);
      });
    }, 1000);
  });
</script>
<style scoped></style>
