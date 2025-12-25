import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeUser } from '../features/AuthSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout clicked');
    dispatch(removeUser());
    alert('User logged out successfully');
    navigate('/', { replace: true });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 px-3 py-1 rounded-md cursor-pointer text-white w-full"
    >
      Logout
    </button>
  );
};

export default Logout;
