import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Perfil.css";

const Perfil = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Thiago Silvares");
  const [email, setEmail] = useState("22.01819-0@maua.br");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [confirmLogout, setConfirmLogout] = useState(false); 

  const navigate = useNavigate(); 
  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeBirthdate = (e) => {
    setBirthdate(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeInstagram = (e) => {
    setInstagram(e.target.value);
  };

  const handleChangeLinkedin = (e) => {
    setLinkedin(e.target.value);
  };

  const handleLogout = () => {
    setConfirmLogout(true); 
  };

  const handleLogoutConfirm = (confirmed) => {
    if (confirmed) {
      navigate("/login");
    } else {
      setConfirmLogout(false);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Perfil</h1>
        <div className="form-container">
          <label>
            <strong>Nome:</strong>
            {editing ? (
              <input
                type="text"
                value={name}
                onChange={handleChangeName}
              />
            ) : (
              <div className="info">{name}</div>
            )}
          </label>
          <label>
            <strong>Email:</strong>
            {editing ? (
              <input
                type="email"
                value={email}
                onChange={handleChangeEmail}
              />
            ) : (
              <div className="info">{email}</div>
            )}
          </label>
          <label>
            <strong>Data de Nascimento:</strong>
            {editing ? (
              <input
                type="text"
                value={birthdate}
                onChange={handleChangeBirthdate}
              />
            ) : (
              <div className="info">{birthdate}</div>
            )}
          </label>
          <label>
            <strong>Número de Telefone:</strong>
            {editing ? (
              <input
                type="text"
                value={phone}
                onChange={handleChangePhone}
              />
            ) : (
              <div className="info">{phone}</div>
            )}
          </label>
          <label>
            <strong>Instagram:</strong>
            {editing ? (
              <input
                type="text"
                value={instagram}
                onChange={handleChangeInstagram}
              />
            ) : (
              <div className="info">{instagram}</div>
            )}
          </label>
          <label>
            <strong>LinkedIn:</strong>
            {editing ? (
              <input
                type="text"
                value={linkedin}
                onChange={handleChangeLinkedin}
              />
            ) : (
              <div className="info">{linkedin}</div>
            )}
          </label>
          <div className="profileButtons">
            {editing ? (
              <button onClick={handleSave}>Salvar</button>
            ) : (
              <button onClick={handleEdit}>Editar</button>
            )}
          </div>
          <div className="logoutButton">
            <button onClick={handleLogout}>Sair</button>
            {confirmLogout && (
              <div className="confirmationBox">
                <p><strong>Tem certeza?</strong></p>
                <button onClick={() => handleLogoutConfirm(true)}>Sim</button>
                <button onClick={() => handleLogoutConfirm(false)}>Não</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
