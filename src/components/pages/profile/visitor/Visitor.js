import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import './visitor.scss';

import google from '../../../../assets/icon/icons8-google.svg';
import facebook from '../../../../assets/icon/icons8-facebook-circled.svg';

function Visitor({ users, isLoginHandler, isLogin }) {
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const user = e.target.username.value;
    const pass = e.target.password.value;

    const data = users.find(
      ({ username, password }) => user === username && pass === password
    );

    (function () {
      if (data) {
        isLoginHandler(true);
        navigate(`/profile/${data.id}`);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorect Username or Password.',
        });
      }
    })();
  }

  function getIdPass(e) {
    e.preventDefault();
    const user = document.querySelector('.visitor__input--username');
    const pass = document.querySelector('.visitor__input--password');
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const profile = users.map(user => user);
    let { username, password } = profile[randomNumber];
    user.value = username;
    pass.value = password;
  }

  return (
    <div className='visitor'>
      <h2>LOGIN</h2>
      <div className='visitor__container'>
        <div className='visitor__form'>
          <form id='form__login' onSubmit={onSubmit}>
            <input
              type='text'
              className='visitor__input--username'
              name='username'
              placeholder='Username'
              required='required'
            />
            <input
              type='password'
              className='visitor__input--password'
              name='password'
              placeholder='Password'
              required='required'
            />
            <div className='checkbox'>
              <input type='checkbox' name='rememberMe' />
              <label htmlFor='rememberMe' className='labelcheck__visitor'>
                Remember me
              </label>
            </div>
            <button type='submit' className='visitor__btn' id='btn__login'>
              LOGIN
            </button>
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
        <div className='popup__data'>
          <p className='popup__message'>
            Try one of these Id's and Password's to login.
          </p>
          <button className='popup__btn' onClick={getIdPass}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Visitor;
