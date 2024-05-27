import React from "react";
import { useLocation } from "react-router-dom";
import {
  HomeOutlined,
  BulbOutlined,
  BellOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "../styles/sidebar.css";
import Automacao from "../images/automacao.png";
import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

const Navbar = () => {
  return (
    <Header style={{ background: "#fff", padding: 0, zIndex: 1, width: '100%', position: 'fixed' }}>
    </Header>
  );
};

const Sidebar = () => {
  const location = useLocation();

  return (
    <Sider
      className="sidebar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        zIndex: 2,
        overflow: 'auto',
        background: '#fff'
      }}
    >
      <div className="logoContainer">
        <div className="logoImageContainer">
          <img src={Automacao} alt="" className="Automacao" />
        </div>
        <div className="titleContainer">
          <h2 className="title" style={{ color: '#05004e' }}>Automação Mauá</h2>
        </div>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        style={{ background: '#fff' }}
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
        <Menu.Item key="/configuracoes" icon={<SettingOutlined />}>
          <a href="/configuracoes">Configurações</a>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout style={{ marginLeft: 43 }}>
        <Navbar />
        <Content style={{ marginTop: 10, padding: 20 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
