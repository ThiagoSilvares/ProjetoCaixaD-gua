import React from 'react';
import { Layout, Card } from 'antd';
import Sidebar from "../components/Sidebar";
import "../styles/Alertas.css";

const { Content } = Layout;

const alertData = {
  critico: [
    { bloco: 'J', nivel: 'abaixo do esperado', change: '10% desde xx/xx' },
    { bloco: 'R', nivel: 'abaixo do esperado', change: '15% desde xx/xx' },
  ],
  estavel: [
    { bloco: 'H', nivel: 'no limite', change: '10% desde xx/xx' },
    { bloco: 'U', nivel: 'no limite', change: '5% desde xx/xx' },
    { bloco: 'C', nivel: 'no limite', change: '8% desde xx/xx' },
  ],
  conforme: [
    { bloco: 'W', nivel: 'acima do esperado', change: '23% desde xx/xx' },
    { bloco: 'E', nivel: 'acima do esperado', change: '18% desde xx/xx' },
    { bloco: 'A', nivel: 'acima do esperado', change: '17% desde xx/xx' },
  ],
};

const Alertas = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', padding: 24, background: '#fff' }}>
          <div className="page-content">
            <h1>Alertas</h1>
            <div className="alert-section">
              <h2>Nível crítico</h2>
              <div className="alert-cards">
                {alertData.critico.map((alert, index) => (
                  <Card key={index} className="alert-card critico">
                    <h3>Bloco {alert.bloco}</h3>
                    <p>Nível {alert.nivel}</p>
                    <p>Abaixo {alert.change}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="alert-section">
              <h2>Nível estável</h2>
              <div className="alert-cards">
                {alertData.estavel.map((alert, index) => (
                  <Card key={index} className="alert-card estavel">
                    <h3>Bloco {alert.bloco}</h3>
                    <p>Nível {alert.nivel}</p>
                    <p>{alert.change}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="alert-section">
              <h2>Nível dentro dos conformes</h2>
              <div className="alert-cards">
                {alertData.conforme.map((alert, index) => (
                  <Card key={index} className="alert-card conforme">
                    <h3>Bloco {alert.bloco}</h3>
                    <p>Nível {alert.nivel}</p>
                    <p>{alert.change}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Alertas;
