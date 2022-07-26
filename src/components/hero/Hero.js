import React from 'react';
import './hero.scss';
import summer from '../../assets/images/summer.png';
import kids from '../../assets/images/kids.png';
import casual from '../../assets/images/casual.png';

function Hero() {
  return (
    <>
      <article>
        <article>
          <section className='hero__summer'>
            <div className='overlay--summer'>
              <h1 className='hero__heading--summer'>
                Summer is Coming <br />
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
        <article>
          <section className='hero__kids'>
            <div className='overlay--kids'>
              <h1 className='hero__heading--kids'>Kids Outfit</h1>
            </div>
            <img
              src={kids}
              alt='little boy posing'
              className='hero__img--kids'
            />
          </section>
        </article>
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
      </article>
    </>
  );
}

export default Hero;
