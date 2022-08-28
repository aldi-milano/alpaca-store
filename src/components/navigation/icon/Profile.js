import { useEffect } from 'react';
import { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';

function Profile({ isLogin }) {
  const [img, setImg] = useState('');

  // useEffect(() => {
  //   (async () => {
  //     const url = await fetch(
  //       `https://ui-avatars.com/api/?name=${
  //         firstname + lastname
  //       }&background=random`
  //     );
  //     setImg(url);
  //   })();
  // });

  function uppercase(str = '') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // const nama = uppercase(firstname);

  return (
    <div className='flex'>
      {/* {isLogin ? (
        <img src={img.url} alt='' className='img__icon' />
      ) : (
        <IoPersonOutline className='nav__icon' />
      )} */}
      <IoPersonOutline className='nav__icon' />
      {/* <p className='nav__title'>{isLogin ? nama : 'Profile'}</p> */}
      <p className='nav__title'>Profile</p>
    </div>
  );
}

export default Profile;
