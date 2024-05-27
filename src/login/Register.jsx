import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Register = () => {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/register", {
                email, password, name
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists");
                    history("/login");
                } else if (res.data === "not exist") {
                    history("/home", { state: { id: name } });
                }
            })
            .catch(e => {
                alert("Wrong details");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        } 
    }

    return (
        <div className={styles.loginBackground}>
            <div className={styles.authFormContainer}>
                <h2>Não possui uma conta? Cadastre-se!</h2>
                <h4>Já possui uma conta? <a href="#" onClick={() => history("/login")} className={styles.linkWithUnderline}>Realize login</a>.</h4>
                <form className={styles.loginForm} onSubmit={submit}>
                    <label htmlFor="name">Seu nome</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nome completo" />
                    <label htmlFor="email">Seu email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="seuemail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Sua senha</label>
                    <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
