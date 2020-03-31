import React, { useState } from 'react';

import { FiLogIn } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoimg from '../../assets/logo.svg'

import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');

   async function handleLogin (e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            console.log(response.data.name);
        } catch (err) {
            alert('Falha no login. Tente novamente.');

        }
    }

    return (
       <div className = "logon-container">
          <section className="form">
            <img src = {logoimg} alt = "Be the Hero" />

            <form onSubmit={handleLogin}>
                <h1> Faça seu Logon</h1>

                <input placeholder = "Sua ID" 
                value ={id}
                onChange ={e => setId(e.target.value)}
                />
                <button type = "submit" className = "button">Entrar</button>

                <Link className="back" to ="/register">
                    <FiLogIn size ={16} color = "#E02041" />
                    Não tenho cadastro
                </Link>
            </form>
        </section>
        
      
        <img src = {heroesImg} alt = "heroes" />

        </div>
 );
}