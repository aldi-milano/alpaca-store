import './visitor.scss';

import google from '../../../../assets/icon/icons8-google.svg';
import facebook from '../../../../assets/icon/icons8-facebook-circled.svg';

function Visitor() {
  return (
    <div className='visitor'>
      <div className='visitor__container'>
        <div className='visitor__form'>
          <form>
            <input
              type='text'
              className='visitor__input'
              placeholder='Username'
              required='required'
            />
            <input
              type='password'
              className='visitor__input'
              placeholder='Password'
              required='required'
            />
            <div className='checkbox'>
              <input type='checkbox' name='rememberMe' />
              <label htmlFor='rememberMe' className='labelcheck__visitor'>
                Remember me
              </label>
            </div>
            <button className='visitor__btn'>LOG IN</button>
          </form>
        </div>
        <div className='visitor__otherLogin'>
          <p className='otherLogin__title'>Or login with</p>
          <div className='otherLogin__container'>
            <div className='social__container'>
              <img src={google} alt='google logo' />
              <p>Google</p>
            </div>
            <div className='social__container'>
              <img src={facebook} alt='google logo' />
              <p>Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visitor;
