import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  BulbOutlined,
  BellOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "../styles/sidebar.css";
import Automacao from "../images/automacao.png";
import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/Perfil");
  };

  return (
    <Header className="navbar">
      <div className="searchContainer">
        <SearchOutlined className="searchIcon" />
        <input type="text" placeholder="Procure aqui" className="searchInput" />
      </div>
      <div className="userInfoContainer" onClick={handleProfileClick}>
        <UserOutlined className="profileIcon" />
        <div className="userInfo">
          <div className="userName">Thiago Silvares</div>
          <div className="userEmail">22.01819-0@maua.br</div>
        </div>
      </div>
    </Header>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  const handleMenuItemClick = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <Sider
      className="sidebar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        zIndex: 2,
        overflow: "auto",
        background: "#fff",
      }}
    >
      <div className="logoContainer">
        <div className="logoImageContainer">
          <img src={Automacao} alt="" className="Automacao" />
        </div>
        <div className="titleContainer">
          <h2 className="title" style={{ color: "#05004e" }}>
            Automação Mauá
          </h2>
        </div>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        selectedKeys={[selectedKey]}
        onClick={handleMenuItemClick}
        style={{ background: "#fff" }}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <a href="/">Caixa D’Água</a>
        </Menu.Item>
        <Menu.Item key="/smartlights" icon={<BulbOutlined />}>
          <a href="/smartlights">SmartLights</a>
        </Menu.Item>
        <Menu.Item key="/alertas" icon={<BellOutlined />}>
          <a href="/alertas">Alertas</a>
        </Menu.Item>
        <Menu.Item key="/historico" icon={<ClockCircleOutlined />}>
          <a href="/historico">Histórico</a>
        </Menu.Item>
        <Menu.Item key="/suporte" icon={<CustomerServiceOutlined />}>
          <a href="/suporte">Suporte</a>
        </Menu.Item>
        <Menu.Item key="/Perfil" icon={<UserOutlined />}>
          <a href="/Perfil">Perfil</a>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout style={{ marginLeft: 200 }}>
        <Navbar />
        <Content className="content" style={{ padding: 20 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
