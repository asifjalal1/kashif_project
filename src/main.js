// import './assets/main.css'
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
const lightbox = GLightbox({
    selector: '.glightbox',
});


AOS.init();

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
