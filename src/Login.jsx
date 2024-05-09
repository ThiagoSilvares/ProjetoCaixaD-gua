import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Realize login para sua conta!</h2>
            <h4 >Não possui conta ainda? <a href="#" onClick={() => props.onFormSwitch('register')}>Cadastra-se</a>.</h4>
            <div className="divider-container">
                <hr className="divider" />
                <span className="divider-text">OU</span>
                <hr className="divider" />
            </div>
        <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Seu email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="seuemail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Sua senha</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Login</button>
        </form>
    </div>
    )
}