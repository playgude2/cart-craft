import React, { useState } from 'react';
import './login.css';

const Auth = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  return (
    <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="/#" className="btn btn-icon btn-primary"><i className="fab fa-facebook-f"></i></a>
            <a href="/#" className="btn btn-icon btn-danger"><i className="fab fa-google-plus-g"></i></a>
            <a href="/#" className="btn btn-icon btn-info"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" className="form-control" />
          <input type="email" placeholder="Email" className="form-control" />
          <input type="password" placeholder="Password" className="form-control" />
          <button type="button" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="/#" className="btn btn-icon btn-primary"><i className="fab fa-facebook-f"></i></a>
            <a href="/#" className="btn btn-icon btn-danger"><i className="fab fa-google-plus-g"></i></a>
            <a href="/#" className="btn btn-icon btn-info"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" className="form-control" />
          <input type="password" placeholder="Password" className="form-control" />
          <a href="/#">Forgot your password?</a>
          <button type="button" className="btn btn-primary">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost btn btn-primary" id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>CartCraft</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost btn btn-primary" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
