import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import './hero.scss';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

import summer from '../../../../assets/images/summer3.png';
import best from '../../../../assets/images/red-woman.png';
import casual from '../../../../assets/images/casual.png';
import wools from '../../../../assets/images/wools.png';

function Hero({ keyword }) {
  return (
    <>
      <article className={keyword?.length > 0 ? `hero active` : ''}>
        <Swiper
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect={'fade'}
        >
          {/* <SwiperSlide>
            <article>
              <section className='hero--summer'>
                <div className='hero__container'>
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
                  <div className='hero__imgs-container'>
                    <div className='background-patern--summer'></div>
                    <img
                      src={summer}
                      alt='girl wearing summer outfit'
                      className='hero__img--summer'
                    />
                  </div>
                </div>
              </section>
            </article>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <article>
              <section className='hero--best'>
                <div className='hero__container'>
                  <div className='hero__imgs-container'>
                    <div className='background-patern--best'></div>
                    <img
                      src={best}
                      alt='girl wearing red dress'
                      className='hero__img--best'
                    />
                  </div>
                  <div className='overlay--best'>
                    <h1 className='hero__heading--best'>
                      hot item{' '}
                      <span>
                        <p>women's weekly collection</p>
                      </span>
                    </h1>
                  </div>
                </div>
              </section>
            </article>
          </SwiperSlide> */}
          <SwiperSlide>
            <article>
              <section className='hero--casual'>
                <div className='hero__container'>
                  <div className='overlay--casual'>
                    <h1 className='hero__heading--casual'>new arrival</h1>
                  </div>
                  <div className='hero__imgs-container'>
                    <img
                      src={casual}
                      alt='man wearing casual shirt'
                      className='hero__img--casual'
                    />
                  </div>
                </div>
              </section>
            </article>
          </SwiperSlide>
          {/* <SwiperSlide>
            <article>
              <section className='hero--wools'>
                <div className='hero__container'>
                  <div className='overlay--wools'>
                    <h1 className='hero__heading--wools'>recycled fabrics</h1>
                  </div>
                  <div className='hero__imgs-container'>
                    <img
                      src={wools}
                      alt='colorful wools'
                      className='hero__img--wools'
                    />
                  </div>
                </div>
              </section>
            </article>
          </SwiperSlide> */}
        </Swiper>
      </article>
    </>
  );
}

export default Hero;
