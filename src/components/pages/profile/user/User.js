import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return (
    <div className='user'>
      <h2>This is user {id} page</h2>
    </div>
  );
}

export default User;
