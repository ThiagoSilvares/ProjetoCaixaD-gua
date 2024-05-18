import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

export const Login = () => {
    
    const history = useNavigate();

    

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/", {
                email, password
            })
            .then(res => {
                if (res.data == "exist") {
                    history("/home");
                } else if (res.data == "notexist") {
                    alert("User have not signed up");
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
        <div className="auth-form-container">
            <h2>Realize login para sua conta!</h2>
            <h4>Não possui conta ainda? <a href="#" onClick={() => history("/register")}>Cadastra-se</a>.</h4>
            <div className="divider-container">
                <hr className="divider" />
                <span className="divider-text">OU</span>
                <hr className="divider" />
            </div>
            <form className="login-form" onSubmit={submit}>
                <label htmlFor="email">Seu email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="seuemail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Sua senha</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
