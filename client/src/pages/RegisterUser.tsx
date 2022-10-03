import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/pages/register-user.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export default function RegisterUser() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      window.alert("Usuário criado com sucesso.");
      history("/");
    } catch {
      window.alert("Erro ao criar usuário, tente novamente.");
    }
  };

  return (
    <div id="page-create-orphanage">
      <main>
        <div className="register-user">
            <fieldset>
              <legend>Dados</legend>            

              <div className="input-block">
                <label htmlFor="name">Email</label>
                <input id="email" onChange={e => setEmail(e.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="password">Senha</label>
                <input id="password" onChange={e => setPassword(e.target.value)} />
              </div>
            </fieldset>

            <button onClick={register} className="confirm-button" type="submit">
              Cadastrar
            </button>
        </div>
      </main>
    </div>
  );
}