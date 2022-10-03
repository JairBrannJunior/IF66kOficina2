import React, { useState } from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link, useNavigate} from 'react-router-dom'

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

function Landing() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      history("/app");
    } catch {
      window.alert("Usuário ou senha incorretos, tente novamente.");
    }
  };

  return (
      <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>
  
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
  
        <div className="location">
          <strong>Cornélio Procópio</strong>
          <span>Paraná</span>
        </div>

        <div className="div-login">
          <div className="input">
            <div>
              <label htmlFor="name">Email</label>
              <input id="name" onChange={(event) => {setEmail(event.target.value)}}/>
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" onChange={(event) => {setPassword(event.target.value)}}/>
            </div>

          </div>

          <div>
            <button className="enter-app" onClick={login}>
              <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/> 
            </button>
          </div>
        </div>

        <div className="register-div">
          <Link to="/registerUser" className="register-button">
            Registrar novo usuário
          </Link>
        </div>
  
      </div>
      </div>
  );
}

export default Landing;