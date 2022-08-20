import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoCaretUpSharp, IoCaretDownSharp } from 'react-icons/io5';

import './user.scss';

function User({ users }) {
  let [state, setState] = useState({
    profileImg: '',
    isClicked: false,
  });

  const { userId } = useParams();

  const user = users?.find(user => user.id == userId);

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
      setState({ ...state, profileImg: res.url });
    })();
  }, []);

  function setClicked(e) {
    setState({ ...state, isClicked: !state.isClicked });
    document.querySelector('.container__detail').toggleAttribute('hidden');
    console.log(e.target);
  }

  return (
    <div className='user'>
      <div className='user__container'>
        <div className='container__img'>
          <img src={state.profileImg} alt='' className='profile__img' />
        </div>
        <div className='container__info'>
          <div className='container__title'>
            <h3>Personal Info</h3>

            {state.isClicked ? (
              <IoCaretUpSharp className='icon__caret' onClick={setClicked} />
            ) : (
              <IoCaretDownSharp className='icon__caret' onClick={setClicked} />
            )}
          </div>
          <div className='container__detail' hidden>
            <p>
              <span>First Name</span>: {firstname}
            </p>
            <p>
              <span>Last Name</span>: {lastname}
            </p>
            <p>
              <span>Phone Number</span>: {phone}
            </p>
          </div>
        </div>
        <div className='container__info'>
          <div className='container__title'>
            <h3>Address</h3>

            {state.isClicked ? (
              <IoCaretUpSharp className='icon__caret' onClick={setClicked} />
            ) : (
              <IoCaretDownSharp className='icon__caret' onClick={setClicked} />
            )}
          </div>
          <div className='container__detail' hidden>
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
