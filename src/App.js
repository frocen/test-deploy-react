import './App.css';
import stars from "./assets/stars.png"
import moon from "./assets/sun.png"
import mountains_behind from "./assets/mountains_behind.png"
import mountains_front from "./assets/mountains_front.png"
import React, { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt"
import { TypeAnimation } from 'react-type-animation';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



function App() {
  const [ScrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
      if (ScrollTop>300 & ScrollTop<400){
       createBubble(); 
      }
      VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare":1
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function createBubble() {
    const section = document.querySelector('.sec');
    const createElement = document.createElement('span');
    var size = Math.random() * 60;
    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * window.innerWidth + 'px';
    section.appendChild(createElement);
    setTimeout(() => {
      createElement.remove()
    }, 4000)
  }

  return (
    <div className="App">
      <body>
        <header className="App-header" style={ScrollTop < 1000 ? { marginTop: ScrollTop * 0.5, position: 'absolute' } : { marginTop: 0, position: 'fixed' }}>
          <a href='#' className='logo'>Logo</a>
          <ul>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </header>
        <section>
          
          <img src={stars} id='stars' style={{ left: ScrollTop * 0.25 }}></img>
          <img src={moon} id='moon' style={{ top: ScrollTop * 1.05 }}></img>
          <img src={mountains_behind} id='mountains_behind' style={{ top: ScrollTop * 0.5 }}></img>
          <h2 className='hidden' id='text' style={{ marginTop: ScrollTop * 1.5, marginRight: ScrollTop * 4 }}>
          <TypeAnimation
  sequence={[
    // Same String at the start will only be typed once, initially
    'We produce food for Mice',
    1000,
    'We produce food for Hamsters',
    1000,
    'We produce food for Guinea Pigs',
    1000,
    'We produce food for Chinchillas',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
                    </h2>
 
          <a href='#' id='btn' style={{ marginTop: ScrollTop * 1.5 }}>About</a>
          <img src={mountains_front} id='mountains_front'></img>
        </section>
        <div className='sec'>
          {/* <div className='container'> */}
          <>
      <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        400: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        700: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1000: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 60
        }
      }}
      >
        <SwiperSlide>
          <div className='card'>
            <div className='content'>
              <h2>01</h2>
              <h3>card one</h3>
              <p>Lore adipiscing labore em ad minim veniam, quis nostrud exercitation ullamco laboquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non  anim id est laborum.
              </p>
              <a href='#'>Read more</a>
            </div>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className='card'>
            <div className='content'>
              <h2>01</h2>
              <h3>card one</h3>
              <p>Lore adipiscing labore em ad minim veniam, quis nostrud exercitation ullamco laboquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non  anim id est laborum.
              </p>
              <a href='#'>Read more</a>
            </div>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className='card'>
            <div className='content'>
              <h2>01</h2>
              <h3>card one</h3>
              <p>Lore adipiscing labore em ad minim veniam, quis nostrud exercitation ullamco laboquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non  anim id est laborum.
              </p>
              <a href='#'>Read more</a>
            </div>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className='card'>
            <div className='content'>
              <h2>01</h2>
              <h3>card one</h3>
              <p>Lore adipiscing labore em ad minim veniam, quis nostrud exercitation ullamco laboquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non  anim id est laborum.
              </p>
              <a href='#'>Read more</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
              {/* </div> */}
          </div>
      </body>
    </div>
  );
}

export default App;
