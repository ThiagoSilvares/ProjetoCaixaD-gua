import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Não possui uma conta? Cadastre-se!</h2>
            <h4 >Já possui uma conta? <a href="#" onClick={() => props.onFormSwitch('login')}>Realize login</a>.</h4>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Seu nome</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="nome completo" />
            <label htmlFor="email">Seu email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="seuemail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Sua senha</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Cadastrar</button>
        </form>
    </div>
    )
}
