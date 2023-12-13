import React, { useEffect } from 'react';
import '../../CSS/btn_container.css';
import '../../CSS/Home.css';
import Discount from '../Pages/Discount';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>

      <div id="carouselExampleSlidesOnly" className="carousel slide active" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/img/co2_banner.jpeg" alt="First slide" />
          </div>
        </div>
      </div>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d276.8011620470052!2d73.82076685369422!3d18.574083634969234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697714259109!5m2!1sen!2sin" width="100%" height="450" Style="border:2;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <h1>Best Sellers</h1>
      <div className="outer">
        <div className="left" data-aos="fade-right">
          <center>
            <h1>Virgin mojito</h1>
          </center>
        </div>
        <div className="right" data-aos="fade-left">
          <img src="/img/virgin_mojito.jpeg" alt="virgin_mojito" Style="width:95%" />
        </div>

      </div>

      <div className="outer">

        <div className="right" data-aos="fade-right">
          <img src="/img/mango_f.jpeg" alt='mango_float' Style="width:100%" />
        </div>
        <div className="left" data-aos="fade-left">
          <center>
            <h1>Mango Float</h1>
          </center>
        </div>
      </div>
      <div className="outer">
        <div className="left" data-aos="fade-right">
          <center>
            <h1>Mango Madness float</h1>
          </center>
        </div>
        <div className="right" data-aos="fade-left">
          <img src="../img/mango_float.jpeg" alt='mango_float' Style="width:100%" />
        </div>
      </div>

      {/* Gallary */}

      <div className="header">
        <h1>Enjoy our product</h1>
        <p>CO2 Gallery</p>
      </div>

      <div className="row">
        <div className="column" >
          <img src="/img/cola_berry_fusion.jpeg" Style="width:100%" alt="img" data-aos="zoom-out-down" />
          <img src="/img/coffee.jpeg" Style="width:100%" alt="img" data-aos="zoom-out-down" />
        </div>

        <div className="column" >
          <img src="/img/virgin_mojito.jpeg" Style="width:100%" alt="img" data-aos="zoom-out-down" />
          <img src="/img/cold_coffee_thin.jpeg" Style="width:100%" alt="img" data-aos="zoom-out-down" />
        </div>

        <div className="column" >
          <img src="/img/cad-b.jpeg" Style="width:100%" alt="img" data-aos="zoom-out-down" />
          <img src="/img/choco.jpeg" Style="width:100%" alt="img" data-aos="zoom-out-down" />
        </div>

        <div className="column" >
          <img src="/img/mango_float.jpeg" alt="img" Style="width:100%" data-aos="zoom-out-down" />
          <img src="/img/mango_f.jpeg" alt="img" Style="width:100%" data-aos="zoom-out-down" />
        </div>
      </div>

      <div>

      </div>
    
    </>
  )
}

