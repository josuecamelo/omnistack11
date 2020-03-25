import React from 'react';
import './style.css'

import logoImg from '../../assets/logo.svg';
import {Link} from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                       Voltar para Logon
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatzapp" />
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input style={{ width: 80 }} placeholder="UF" />
                    </div>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
