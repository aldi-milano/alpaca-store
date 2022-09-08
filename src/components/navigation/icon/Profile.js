import { IoPersonOutline } from 'react-icons/io5';

function Profile({ isLogin, profile, profileImg }) {
  let firstname;
  let img;

  if (profile && profileImg) {
    let n = profile?.name?.firstname;
    firstname = uppercase(n);
    let [image] = profileImg;
    img = image.url;
  }

  function uppercase(str = '') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='flex' title='Profile'>
      {isLogin ? (
        <img src={img} alt='' className='img__icon' />
      ) : (
        <IoPersonOutline className='nav__icon' />
      )}
      <p className='nav__title'>{isLogin ? firstname : 'Profile'}</p>
    </div>
  );
}

export default Profile;
