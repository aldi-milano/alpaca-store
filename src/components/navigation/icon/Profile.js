import React from 'react';

import { IoPersonOutline } from 'react-icons/io5';

function Profile() {
  return (
    <div className='flex'>
      <IoPersonOutline className='nav__icon' />
      <p className='nav__title'>Profile</p>
    </div>
  );
}

export default Profile;
