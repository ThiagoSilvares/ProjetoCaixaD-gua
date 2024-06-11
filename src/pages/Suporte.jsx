

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
                        question="Como posso monitorar o nível da água na caixa d'água?"
                        answer="Você pode monitorar o nível da água diretamente pelo nosso dashboard, que fornece atualizações em tempo real."
                    />
                    <FaqItem
                        question="Como configurar alertas de nível de água?"
                        answer="Você pode configurar alertas de nível de água nas configurações do seu painel de controle, definindo os níveis críticos para receber notificações."
                    />
                    <FaqItem
                        question="O que devo fazer se não estiver recebendo notificações de alerta?"
                        answer="Verifique se as notificações estão ativadas nas configurações do seu dispositivo e no painel de controle do sistema. Caso o problema persista, entre em contato com o suporte."
                    />
                    <FaqItem
                        question="Como acessar o histórico de dados da minha caixa d'água?"
                        answer="Você pode acessar o histórico de dados na seção 'Histórico' do seu dashboard, onde poderá visualizar registros de nível de água, temperatura e umidade."
                    />
                    <FaqItem
                        question="Posso integrar o sistema com outros dispositivos inteligentes?"
                        answer="Sim, nosso sistema permite integração com diversos dispositivos inteligentes. Consulte o manual de integração disponível na seção de suporte do site."
                    />
                    <FaqItem
                        question="Quais são as opções de suporte disponíveis?"
                        answer="Oferecemos suporte via e-mail, chat ao vivo e telefone. Nossos canais de suporte estão disponíveis de segunda a sexta-feira, das 9h às 18h."
                    />
                    <FaqItem
                        question="Como posso ajustar as configurações de temperatura e umidade?"
                        answer="As configurações de temperatura e umidade podem ser ajustadas diretamente no dashboard, na seção de 'Configurações'."
                    />
                    <FaqItem
                        question="O que fazer se os dados do sensor parecem incorretos?"
                        answer="Primeiro, verifique se o sensor está instalado corretamente e se não há obstruções. Caso os dados ainda pareçam incorretos, entre em contato com nosso suporte técnico para assistência."
                    />
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








