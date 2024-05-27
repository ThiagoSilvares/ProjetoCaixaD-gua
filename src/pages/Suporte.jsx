import React, { useState } from "react";
import "../styles/suporte.css";

const Suporte = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Formulário de contato enviado:", formData);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    };

    return (
      <div className="container">
        <div className="content">
          <h1>Suporte</h1>
          <div className="form-container">
            <h2>Entre em Contato</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Mensagem:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="faq-container">
            <h2>Perguntas Frequentes (FAQ)</h2>
            <ul>
              <li>
                <strong>Como posso redefinir minha senha?</strong>
                <p>Para redefinir sua senha, visite a página de login e clique em "Esqueci minha senha". Um e-mail será enviado para você com instruções sobre como redefinir sua senha.</p>
              </li>
              <li>
                <strong>Quanto tempo leva para receber uma resposta do suporte?</strong>
                <p>Nosso objetivo é responder às consultas de suporte dentro de 24 horas úteis.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Suporte;
