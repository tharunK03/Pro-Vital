import React from 'react';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import hero5 from '../assets/hero5.png';
import hero6 from '../assets/hero6.png';
import hero7 from '../assets/hero7.png';
import hero8 from '../assets/hero8.png';
import { SearchBar } from './SearchBar';

const heroImagesCol1 = [hero1, hero2, hero3, hero4];
const heroImagesCol2 = [hero5, hero6, hero7, hero8];

export const Hero = () => (
  <section className="hero">
    <div className="hero__container">
      <div className="hero__images hero__images--large">
        <div className="hero__images-col hero__images-col--1">
          {[...heroImagesCol1, ...heroImagesCol1].map((img, i) => (
            <img src={img} alt={`hero${(i%4)+1}`} key={i} />
          ))}
        </div>
        <div className="hero__images-col hero__images-col--2">
          {[...heroImagesCol2, ...heroImagesCol2].map((img, i) => (
            <img src={img} alt={`hero${(i%4)+5}`} key={i} />
          ))}
        </div>
      </div>
      <div className="hero__content">
        <h1>Book an appointment with <span className="hero__highlight">lifestyle medicine</span> experts</h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
        <div className="hero__searchbar-mobile">
          <SearchBar />
        </div>
        <div className="hero__mobile-images">
          {[...heroImagesCol1, ...heroImagesCol2, ...heroImagesCol1, ...heroImagesCol2, ...heroImagesCol1, ...heroImagesCol2].map((img, i) => (
            <img src={img} alt={`hero-mobile-${i}`} key={i} />
          ))}
        </div>
      </div>
      <div className="hero__searchbar-overlay">
        <SearchBar />
      </div>
    </div>
  </section>
);
