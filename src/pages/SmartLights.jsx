
import React, { useState } from "react";
import { Layout, Card, Row, Col } from "antd";
import Sidebar from "../components/Sidebar";
import "leaflet/dist/leaflet.css"; 
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; 
import "../styles/Dashboard.css";

const { Content } = Layout;

const SmartLightsDashboard = () => {
  const mauaLatitude = -23.700616;
  const mauaLongitude = -46.548033;

  const [devices, setDevices] = useState(Array.from({ length: 10 }, (_, index) => ({
    name: `SmartLight_${index}`,
    fields: {
      Contador_de_dados_transferido_0: Math.floor(Math.random() * 5000),
      Contador_de_dados_transferido_1: Math.floor(Math.random() * 5000),
      data_Umidade: Math.floor(Math.random() * 100),
      data_Temperatura: Math.floor(Math.random() * 50),
      Número_de_pacotes_transferidos: Math.floor(Math.random() * 200),
      rxInfo_altitude_0: Math.floor(Math.random() * 1000),
      rxInfo_latitude_0: mauaLatitude + (Math.random() * 0.005 - 0.0025), 
      rxInfo_loRaSNR_0: Math.random() * 20 - 10,
      rxInfo_longitude_0: mauaLongitude + (Math.random() * 0.005 - 0.0025), 
      rxInfo_rssi_0: Math.floor(Math.random() * -150),
      txInfo_dataRate_spreadFactor: Math.floor(Math.random() * 12) + 7,
      txInfo_frequency: Math.floor(Math.random() * 1000000000) + 900000000,
    },
    tags: {
      applicationID: Math.floor(Math.random() * 50),
      devEUI: `${Math.floor(Math.random() * 10)}${Math.random().toString(16).slice(2, 14)}`,
      fPort: Math.floor(Math.random() * 200),
      nodeName: `Node_${index}`,
      rxInfo_mac_0: `${Math.floor(Math.random() * 10000)}ff${Math.floor(Math.random() * 10000)}`,
      rxInfo_name_0: `IMT-${index}-kerlink`,
      txInfo_adr: Math.random() < 0.5 ? "true" : "false",
      txInfo_codeRate: `${Math.floor(Math.random() * 8) + 4}/5`,
      txInfo_dataRate_bandwidth: `${Math.floor(Math.random() * 100)} MHz`,
      txInfo_dataRate_modulation: Math.random() < 0.5 ? "LORA" : "FSK",
    },
    timestamp: Date.now(),
  })));

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content>
          <div className="page-content">
            <div className="dashboard-header">
              <h1>SmartLights Dashboard</h1>
            </div>
            <div className="site-layout-background">
              {devices.map((device, index) => (
                <Card key={index} title={device.name} style={{ marginBottom: "20px" }}>
                  <Row gutter={[16, 16]}>
                    <Col span={8}>
                      <p>Contador de dados transferido 0: {device.fields.Contador_de_dados_transferido_0}</p>
                      <p>Contador de dados transferido 1: {device.fields.Contador_de_dados_transferido_1}</p>
                      <p>Umidade: {device.fields.data_Umidade}%</p>
                      <p>Temperatura: {device.fields.data_Temperatura}°C</p>
                      <p>Número de pacotes transferidos: {device.fields.Número_de_pacotes_transferidos}</p>
                    </Col>
                    <Col span={16}>
                      <MapContainer center={[device.fields.rxInfo_latitude_0, device.fields.rxInfo_longitude_0]} zoom={13} style={{ height: "200px", width: "100%" }}>
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[device.fields.rxInfo_latitude_0, device.fields.rxInfo_longitude_0]}>
                          <Popup>{device.name}</Popup>
                        </Marker>
                      </MapContainer>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SmartLightsDashboard;
