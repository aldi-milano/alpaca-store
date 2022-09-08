import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  IoCaretUpSharp,
  IoCaretDownSharp,
  IoLogOutOutline,
} from 'react-icons/io5';
import Swal from 'sweetalert2';

import './user.scss';

function User({ users, profileImg, logoutHandler }) {
  const [img] = profileImg;
  const ref = useRef();
  const navigate = useNavigate();

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

  useEffect(() => {
    const icons = document.querySelectorAll('.icon__caret');
    const detail = document.querySelectorAll('.user__detail');

    function showingInfo(i) {
      // detail.forEach(d => d.classList.remove('active'));
      detail[i].classList.toggle('active');
    }

    icons.forEach((_, i) => {
      icons[i].addEventListener('click', () => showingInfo(i));
    });
  }, []);

  function uppercase(str = '') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function logout() {
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      buttonsStyling: true,
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then(result => {
      if (result.isConfirmed) {
        logoutHandler();
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 1500);
      }
    });
  }

  return (
    <div className='user'>
      <div ref={ref} className='user__content'>
        <div className='user__greeting'>
          <h3 className='greeting'>Hello, {uppercase(firstname)}</h3>
          <IoLogOutOutline
            className='nav__icon logout'
            onClick={logout}
            title='Logout'
          />
        </div>
        <div className='container-user'>
          <div className='user__img'>
            <img src={img.url} alt='profile image' className='img' />
          </div>
          <div className='container-data'>
            <div className='user__container' id='1'>
              <div className='user__title'>
                <h4 className='title'>PERSONAL INFORMATION</h4>
                <IoCaretDownSharp className='icon__caret' />
              </div>
              <div className='user__detail'>
                <table>
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </div>
            <div className='user__container' id='2'>
              <div className='user__title'>
                <h4 className='title'>USER ADDRESS</h4>
                <IoCaretDownSharp className='icon__caret' />
              </div>
              <div className='user__detail'>
                <table>
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </div>
            <div className='user__container' id='3'>
              <div className='user__title'>
                <h4 className='title'>ACCOUNT DETAIL</h4>
                <IoCaretDownSharp className='icon__caret' />
              </div>
              <div className='user__detail'>
                <table>
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
