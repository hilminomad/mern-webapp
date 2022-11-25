import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const user = { email, password };

    try {
      const url = `/api/v1/auth/login`;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className='hero login' style={{ backgroundImage: 'none' }}>
      <div className='login__container'>
        <div className='login__signin'>
          <h2>
            Sign in to your<br></br>Account
          </h2>
          <form
            action='submit'
            onSubmit={handleSubmit}
            className='footer__form login__signin_form'
          >
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              placeholderTextColor='#806e28'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='login__signin_submitbutton'>
              <button type='submit'>
                <p>SIGN IN</p>
              </button>
            </div>
            <div className='login__signin_forgotpasswordbutton'>
              <button>
                <a href='/'>FORGOT PASSWORD &gt;</a>
              </button>
            </div>
          </form>
        </div>
        <div className='login__seperator'></div>
        <div className='login__signin'>
          <h2>
            New<br></br>Costomer
          </h2>
          <div className='login__signin_submitbutton'>
            <button type='submit'>
              <Link to={'/create'}>
                <p>CREATE ACCOUNT</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
