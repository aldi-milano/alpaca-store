import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { IoCaretUpSharp, IoCaretDownSharp } from 'react-icons/io5';

import './user.scss';

function User({ users, profileImg }) {
  const [img] = profileImg;
  const { url } = img;
  const ref = useRef();
  let [state, setState] = useState({
    // profileImg: '',
    isShowing: false,
  });

  const { userId } = useParams();

  const user = users.find(u => u.id == userId);

  const {
    name: { firstname, lastname },
    email,
    username,
    password,
    id,
    phone,
    address: { city, number, street, zipcode },
  } = user;

  // useEffect(() => {
  //   (async () => {
  //     const data = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
  //     const [res] = await data.json();
  //     setState({ ...state, profileImg: res.url });
  //   })();
  // }, []);

  const elContainer = document.querySelector('.user__container');

  // function showingEl(e) {
  //   console.log(e.target);
  //   setState({ ...state, isShowing: !state.isShowing });
  // }

  // function setShowing() {
  //   setState({ ...state, isShowing: !state.isShowing });
  // }

  // useEffect(() => {
  //   const showingAccordion = document.querySelector('.user__content');
  //   function doSomething(e) {
  //     console.log(e.target);
  //     if (
  //       e.target.classList.contains('user__title') ||
  //       e.target.classList.contains('title') ||
  //       e.target.classList.contains('icon__caret')
  //     ) {
  //       console.log('IT WORKS!');
  //       setShowing();
  //     }
  //   }
  //   showingAccordion.addEventListener('click', doSomething);
  //   return () => showingAccordion.removeEventListener('click', doSomething);
  // }, []);

  useEffect(() => {
    const icons = document.querySelectorAll('.icon__caret');
    const detail = document.querySelectorAll('.user__detail');

    function showingInfo(i) {
      // detail.className = 'user__detail';
      detail[i].classList.toggle('user__detail--active');
    }

    icons.forEach((_, i) => {
      icons[i].addEventListener('click', () => showingInfo(i));
    });
  }, []);

  useEffect(() => {
    console.log(state.isShowing);
  }, [state.isShowing]);

  function uppercase(str = '') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(uppercase(firstname));

  return (
    <div className='user'>
      <div ref={ref} className='user__content'>
        <h2>Welcome Back, {uppercase(firstname)}</h2>
        <div className='user__img'>
          <img src={url} alt='profile image' className='img' />
        </div>
        <div className='user__container' id='1'>
          <div className='user__title'>
            <h3 className='title'>PERSONAL INFORMATION</h3>
            {!state.isShowing ? (
              <IoCaretDownSharp className='icon__caret' />
            ) : (
              <IoCaretUpSharp className='icon__caret' />
            )}
          </div>
          <div className='user__detail'>
            <table>
              <tr>
                <td>First Name</td>
                <td>:</td>
                <td>{firstname}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>:</td>
                <td>{lastname}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>:</td>
                <td>{phone}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className='user__container' id='2'>
          <div className='user__title'>
            <h3 className='title'>USER ADDRESS</h3>
            {!state.isShowing ? (
              <IoCaretDownSharp className='icon__caret' />
            ) : (
              <IoCaretUpSharp className='icon__caret' />
            )}
          </div>
          <div className='user__detail'>
            <table>
              <tr>
                <td>City</td>
                <td>:</td>
                <td>{city}</td>
              </tr>
              <tr>
                <td>Street</td>
                <td>:</td>
                <td>{street}</td>
              </tr>
              <tr>
                <td>Number</td>
                <td>:</td>
                <td>{number}</td>
              </tr>
              <tr>
                <td>ZIP Code</td>
                <td>:</td>
                <td>{zipcode}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className='user__container' id='3'>
          <div className='user__title'>
            <h3 className='title'>ACCOUNT DETAIL</h3>
            {!state.isShowing ? (
              <IoCaretDownSharp className='icon__caret' />
            ) : (
              <IoCaretUpSharp className='icon__caret' />
            )}
          </div>
          <div className='user__detail'>
            <table>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Username</td>
                <td>:</td>
                <td>{username}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>:</td>
                <td>{password}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
