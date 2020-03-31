import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoimg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [UF, setUf] = useState('');

    const history = useHistory();

   async function handleRegister (e) {
        e.preventDefault();

        const data = { 
            name,
            email,
            Whatsapp,
            city,
            UF,
        };
        console.log(data);


        try {
        const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}`);

        history.push('/');

        } catch (err) {
            alert('Erro no cadastro. tente novamente.');
        }
    }

    return (
        <div className ="register-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="Be the Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da sua ONG.</p>
                   
                    <Link className="back" to ="/register">
                    <FiArrowLeft size ={16} color = "#E02041" />
                    Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit = {handleRegister}>

                <input 
                    placeholder = "Nome da ONG"
                    value ={name}
                    onChange = {e => setName(e.target.value)} 
                    />

                <input type = "email" placeholder = "E-mail"
                    value ={email}
                    onChange = {e => setEmail(e.target.value)} 
                    />

                <input placeholder = "Whatsapp"
                    value ={Whatsapp}
                    onChange = {e => setWhatsapp(e.target.value)} 
                />

                <div className = "input-group">
                    
                    <input 
                    placeholder = "Cidade" 
                    value ={city}
                    onChange = {e => setCity(e.target.value)} 
                    />

                    <input 
                    placeholder = "UF" 
                    style = {{width: 80}} 
                    value ={UF}
                    onChange = {e => setUf(e.target.value)} 
                    />
                </div>

                <button className = "button" type ="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
    }