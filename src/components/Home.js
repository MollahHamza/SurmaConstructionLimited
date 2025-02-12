import React from 'react'
import About from './About'
import Card from './Card'
import Footer from './Footer'
import Icard1 from './Icard1'
import Nav from './Nav'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'flowbite';
import '../home.css'

import PageProgress from 'react-page-progress';



AOS.init();

export default function Home() {
  return (
    <div>

         <Nav />
         <PageProgress color={'blue'} height={5} />
        <div class="center">
  <h1 class="center__text glitch is-glitching" >
  <div class="containerr">
    <div class="box">

        <div class="title">
            <span class="block"></span>
            <h1>Surma<span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p>Construction Limited</p>
        </div>
        <div className="getstart">
        <a href="/service" id='star'>Get Started </a>
        
        </div>
        <div class="tagline" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
         <p id='tag'>Dream . Discuss . Design </p>
        </div>
        
    </div>
</div>

  </h1>
</div>


<Card />

<Footer />

    </div>

  )
}
