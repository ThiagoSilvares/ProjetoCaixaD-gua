import React, { useState } from "react";
import "../styles/suporte.css";

const Suporte = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

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
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    const FaqItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleOpen = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className="faq-item">
                <div className="faq-question" onClick={toggleOpen}>
                    <span>{question}</span>
                    <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
                </div>
                {isOpen && <div className="faq-answer">{answer}</div>}
            </div>
        );
    };

    return (
        <div className="container">
            <div className="content">
                <h1>Suporte</h1>
                <div className="faq-container">
                    <h2>Perguntas Frequentes (FAQ)</h2>
                    <FaqItem
                        question="Como posso redefinir minha senha?"
                        answer="Para redefinir sua senha, visite a página de login e clique em 'Esqueci minha senha'. Um e-mail será enviado para você com instruções sobre como redefinir sua senha."
                    />
                    <FaqItem
                        question="Quanto tempo leva para receber uma resposta do suporte?"
                        answer="Nosso objetivo é responder às consultas de suporte dentro de 24 horas úteis."
                    />
                    <FaqItem
                        question="Qual é a política de reembolso?"
                        answer="Nossa política de reembolso permite que você solicite um reembolso total dentro de 30 dias após a compra, se não estiver satisfeito com nossos serviços."
                    />
                    <FaqItem
                        question="Posso alterar meu plano de assinatura?"
                        answer="Sim, você pode alterar seu plano de assinatura a qualquer momento na seção de configurações da sua conta."
                    />
                    {/* Adicione mais FaqItems conforme necessário */}
                </div>
                <div className="form-container">
                    <h2>Entre em Contato</h2>
                    {submitted && <div className="success-message">Sua mensagem foi enviada com sucesso!</div>}
                    <form onSubmit={handleSubmit}>
                        <label>
                            Nome:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Mensagem:
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Suporte;
