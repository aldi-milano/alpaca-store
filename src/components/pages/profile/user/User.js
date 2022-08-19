import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoCaretUpSharp, IoCaretDownSharp } from 'react-icons/io5';

import './user.scss';

function User({ users }) {
  let [profileImg, setProfileImg] = useState({});
  const { userId } = useParams();

  const user = users.find(user => user.id == userId);
  console.log(user);

  const {
    name: { firstname, lastname },
    email,
    id,
    phone,
    address: { city, number, street, zipcode },
  } = user;

  useEffect(() => {
    (async () => {
      const data = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
      const [res] = await data.json();
      setProfileImg(res.url);
    })();
  }, []);

  const personalInfo = document.querySelector('.container__detail');
  const arrowToggle = document.querySelector('.icon__caret');

  return (
    <div className='user'>
      <div className='user__container'>
        <div className='container__img'>
          <img src={profileImg} alt='' className='profile__img' />
        </div>
        <div className='container__info'>
          <div className='container__title'>
            <h3>Personal Info</h3> <IoCaretUpSharp className='icon__caret' />
          </div>
          <div className='container__detail'>
            <p>
              <span>First Name</span>: {firstname}
            </p>
            <p>
              <span>Last Name</span>: {lastname}
            </p>
            <p>
              <span>Phone Number</span>: {phone}
            </p>
            <p>
              <span>City</span>: {city}
            </p>
            <p>
              <span>Street</span>: {street}
            </p>
            <p>
              <span>Number</span>: {number}
            </p>
            <p>
              <span>ZIP Code</span>: {zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
