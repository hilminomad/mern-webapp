import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function CreateAccount() {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const user = { name, email, password };

    try {
      const url = `/api/v1/auth/register`;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      console.log('success');
      <Navigate to='/login' />;
      setPassword('');
      setEmail('');
      setName('');
    } catch (error) {
      console.log('error');
      setError(error.message);
    }
  };
  return (
    <>
      {error.length > 0 && <p>{error}</p>}
      <section className='hero login' style={{ backgroundImage: 'none' }}>
        <div className='login__container'>
          <div className='login__signin'>
            <h2>Sign up</h2>
            <form
              action='submit'
              className='footer__form login__signin_form'
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                placeholder='Full Name'
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <h2>We believe in:</h2>}
              <div className='login__signin_submitbutton'>
                <button type='submit'>
                  <p>SUBMIT</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
