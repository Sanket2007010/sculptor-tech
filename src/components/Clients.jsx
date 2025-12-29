import React from 'react';
import './Clients.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import client1 from '../images/MGCApital.png';
import client2 from '../images/logo.gif';
import client3 from '../images/bbc_logo 2.jpg';
import client4 from '../images/saptadhanya.png';

const Clients = () => {
  const clientLogos = [client1, client2, client3, client4];

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <h2 className="section-title">Our Clients</h2>
        <p className="section-subtitle">
          Trusted by leading companies around the world
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          className="clients-slider"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="client-card">
                <img src={logo} alt={`Client ${index + 1}`} className="client-logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Clients;
