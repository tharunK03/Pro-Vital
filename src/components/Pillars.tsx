import React, { useState, useRef, useEffect } from 'react';
import nutritionImg from '../assets/kitchen.jpg';
import activityImg from '../assets/fitness.jpg';
import sleepImg from '../assets/sleep.jpg';
import stressImg from '../assets/yoga.jpg';
import socialImg from '../assets/food.jpg';
import substanceImg from '../assets/drug.jpg';
import leftArrow from '../assets/left arrow.png';
import rightArrow from '../assets/right arrow.png';

const pillars = [
  {
    title: 'Nutrition',
    img: nutritionImg,
    badge: { icon: '💙', value: '121/80', label: 'mmHg', color: '#3db6e4' },
    description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
  },
  {
    title: 'Physical activity',
    img: activityImg,
    badge: { icon: '🧡', value: '32', label: 'minutes', color: '#e89c5a' },
    description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
  },
  {
    title: 'Restorative sleep',
    img: sleepImg,
    badge: { icon: '💚', value: '8', label: 'hours', color: '#6fcf97' },
    description: 'Consistent, quality sleep is essential for cognitive function and physical health.',
  },
  {
    title: 'Stress management',
    img: stressImg,
    badge: { icon: '💙', value: '60', label: 'bpm', color: '#3db6e4' },
    description: 'Effective stress management techniques are crucial for mental well-being and overall health.',
  },
  {
    title: 'Social connection',
    img: socialImg,
    badge: { icon: '🧡', value: 'Feeling', label: 'better', color: '#e89c5a' },
    description: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.',
  },
  {
    title: 'Substance abuse',
    img: substanceImg,
    badge: { icon: '💚', value: '02', label: 'days', color: '#6fcf97' },
    description: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.',
  },
];

export const Pillars = () => {
  const [active, setActive] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current[active]) {
      cardsRef.current[active].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [active]);

  const scroll = (dir: 'left' | 'right') => {
    if (cardsRowRef.current) {
      const { scrollLeft, clientWidth } = cardsRowRef.current;
      const scrollAmount = clientWidth * 0.8;
      cardsRowRef.current.scrollTo({
        left: dir === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="pillars">
      <div className="pillars__arrows-topright">
        <button className="pillars__arrow" onClick={() => scroll('left')} aria-label="Scroll left">
          <img src={leftArrow} alt="Left Arrow" style={{ width: 24, height: 24 }} />
        </button>
        <button className="pillars__arrow" onClick={() => scroll('right')} aria-label="Scroll right">
          <img src={rightArrow} alt="Right Arrow" style={{ width: 24, height: 24 }} />
        </button>
      </div>
      <h2 className="pillars__subtitle">HOW IT WORKS</h2>
      <h3 className="pillars__title"><span className="pillars__highlight">Lifestyle as medicine:</span> The six pillars</h3>
      <div className="pillars__tabs">
        {pillars.map((p, i) => (
          <button
            key={p.title}
            className={`pillars__tab${active === i ? ' pillars__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {p.title}
          </button>
        ))}
      </div>
      <div className="pillars__cards-wrapper">
        <div className="pillars__cards pillars__cards--all" ref={cardsRowRef}>
          {pillars.map((pillar, i) => (
            <div
              className={`pillars__card${active === i ? ' pillars__card--active' : ''}`}
              key={pillar.title}
              ref={el => { cardsRef.current[i] = el as HTMLDivElement | null; }}
            >
              <div className="pillars__card-img-wrap">
                <img src={pillar.img} alt={pillar.title} className="pillars__card-img" />
                <div className="pillars__card-badge" style={{ borderColor: pillar.badge.color }}>
                  <span className="pillars__card-badge-icon" style={{ color: pillar.badge.color }}>{pillar.badge.icon}</span>
                  <span className="pillars__card-badge-value" style={{ color: pillar.badge.color }}>{pillar.badge.value}</span>
                  <span className="pillars__card-badge-label">{pillar.badge.label}</span>
                </div>
              </div>
              <div className="pillars__card-info">
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
