import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate('/auth');
  };

  return (
    <div className="home-container">
      <h1>Welcome to CartCraft</h1>
      <p>CartCraft is your ultimate e-commerce platform that provides a seamless shopping experience.</p>
      <p>Explore a wide range of products, manage your cart, and place orders easily.</p>
      <p>
        <button onClick={handleAuthClick}>Sign in or Sign up</button> to start your shopping journey with us!
      </p>
    </div>
  );
};

export default Home;
