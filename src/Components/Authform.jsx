import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div id="box">
      <div id="main" className={isLogin ? 'login-active' : 'signup-active'}></div>

      <div id="loginform" className={isLogin ? 'visible' : 'hidden'}>
        <h1>LOGIN</h1>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button>Login</button>
      </div>

      <div id="signupform" className={!isLogin ? 'visible' : 'hidden'}>
        <h1>SIGN UP</h1>
        <input type="text" placeholder="Full Name" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button>Sign Up</button>
      </div>

      <div id="login_msg" className={isLogin ? 'visible' : 'hidden'}>Have an account?</div>
      <div id="signup_msg" className={!isLogin ? 'visible' : 'hidden'}>Don't have an account?</div>

      <button id="login_btn" onClick={handleToggle} className={isLogin ? 'active' : ''}>
        Login
      </button>
      <button id="signup_btn" onClick={handleToggle} className={!isLogin ? 'active' : ''}>
        Sign Up
      </button>
    </div>
  );
};

export default AuthForm;
