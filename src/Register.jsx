import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Cadastrar</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Primeiro nome:</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="primeiro nome" />
            <label htmlFor="lastname">Último nome:</label>
            <input value={lastname} name="lastname" onChange={(e) => setLastName(e.target.value)} id="lastname" placeholder="último nome" />
            <label htmlFor="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="seuemail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Senha:</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Entrar</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Já tem uma conta, faça login clicando aqui!</button>
    </div>
    )
}
