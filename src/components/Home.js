import React from "react";
import { Layout } from "antd";
import MainLayout from "./Sidebar";
import { useLocation } from "react-router-dom";
import { Column, Line, Area, Bar } from "@ant-design/charts";

const { Content } = Layout;

const Home = () => {
  const location = useLocation();
  const chartData = [
    { item: "Caixa D’Água", value: Math.random() * 100 },
    { item: "SmartLights", value: Math.random() * 100 },
    { item: "Alertas", value: Math.random() * 100 },
    { item: "Histórico", value: Math.random() * 100 },
    { item: "Suporte", value: Math.random() * 100 },
    { item: "Perfil", value: Math.random() * 100 },
  ];

  const renderChart = () => {
    switch (location.pathname) {
      case "/":
        return <Column data={chartData} xField="item" yField="value" />;
      case "/caixadagua":
        return <Line data={chartData} xField="item" yField="value" />;
      case "/smartlights":
        return <Line data={chartData} xField="item" yField="value" />;
      case "/alertas":
        return <Area data={chartData} xField="item" yField="value" />;
      case "/historico":
        return <Bar data={chartData} xField="item" yField="value" />;
      case "/suporte":
        return <Column data={chartData} xField="item" yField="value" />;
      case "/Perfil":
        return <Line data={chartData} xField="item" yField="value" />;
      default:
        return null;
    }
  };
};
export default Home;
