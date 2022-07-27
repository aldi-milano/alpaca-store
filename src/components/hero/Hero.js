import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import './hero.scss';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

import summer from '../../assets/images/summer.png';
import best from '../../assets/images/best.png';
import casual from '../../assets/images/casual.png';

function Hero() {
  return (
    <>
      <article>
        <Swiper
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect={'fade'}
        >
          <SwiperSlide>
            <article>
              <section className='hero__summer'>
                <div className='overlay--summer'>
                  <h1 className='hero__heading--summer'>
                    summer is coming <br />
                    <span>
                      50%
                      <br />
                      off
                    </span>
                  </h1>
                </div>
                <img
                  src={summer}
                  alt='girl wearing summer outfit'
                  className='hero__img--summer'
                />
              </section>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <section className='hero__casual'>
                <div className='overlay--casual'>
                  <h1 className='hero__heading--casual'>new arrival</h1>
                </div>
                <img
                  src={casual}
                  alt='little boy posing'
                  className='hero__img--casual'
                />
              </section>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <section className='hero__best'>
                <div className='overlay--best'>
                  <h1 className='hero__heading--best'>
                    hot item
                    <p>women's weekly collection</p>
                  </h1>
                </div>
                <img
                  src={best}
                  alt='little boy posing'
                  className='hero__img--best'
                />
              </section>
            </article>
          </SwiperSlide>
        </Swiper>
      </article>
    </>
  );
}

export default Hero;
