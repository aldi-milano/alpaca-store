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
  const { url } = img;
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
        navigate('/', { replace: true });
        console.log(`It's logout.`);
        // Swal.fire('', 'Item Discarded', 'success');
      }
    });
  }

  return (
    <div className='user'>
      <div ref={ref} className='user__content'>
        <div className='user__greeting'>
          <h3>Hello, {uppercase(firstname)}</h3>
          <IoLogOutOutline className='icon' onClick={logout} title='Logout' />
        </div>
        <div className='user__img'>
          <img src={url} alt='profile image' className='img' />
        </div>
        <div className='user__container' id='1'>
          <div className='user__title'>
            <h3 className='title'>PERSONAL INFORMATION</h3>
            <IoCaretDownSharp className='icon__caret' />
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
            <IoCaretDownSharp className='icon__caret' />
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
            <IoCaretDownSharp className='icon__caret' />
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
