import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

export default function Login() {
  const { setLoggedIn, setGlobalUser } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if (!email || !password) return;
    const user = { email, password };

    try {
      console.log('bismillah');
      const url = '/api/v1/auth/login';
      const res = await axios.post(url, user);
      console.log(res.data);
      setGlobalUser(res.data);
      setLoggedIn(true);
      console.log('alhamdolilaah');
      navigate('/');
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error.response.data.msg);
      setErrorMsg(error.response.data.msg);
      setError(true);
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
            {error && (
              <div className='error_container'>
                <p>{errorMsg}</p>
              </div>
            )}
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
            <button>
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
