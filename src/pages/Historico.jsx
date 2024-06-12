import React from "react";
import Chart from "chart.js/auto";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css"; 

const { Content } = Layout;

const Historico = () => {
  const histChartRef = React.useRef(null);

  React.useEffect(() => {
    if (!histChartRef.current) return;

    const histChartData = {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [
        {
          label: "2023",
          data: [80, 60, 95, 75, 80, 65, 50, 70, 90, 85, 80, 65],
          backgroundColor: ["rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)"],
          borderColor: ["rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)"],
          borderWidth: 1,
        },
        {
          label: "2024",
          data: [70, 65, 85, 70, 75, 60, 45, 65, 85, 80, 75, 60],
          backgroundColor: "rgb(0, 105, 17)", 
          borderColor: "rgb(0, 105, 17)", 
          borderWidth: 1,
        },
      ],
    };

    const histChartOptions = {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Histórico do Nível da Água Anual",
          font: {
            size: 18,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            color: "#000000",
          },
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#000000",
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Mês",
            color: "#000000",
          },
          ticks: {
            color: "#000000",
          },
        },
        y: {
          title: {
            display: true,
            text: "Nível da Caixa D'Água",
            color: "#000000",
          },
          beginAtZero: true,
          ticks: {
            color: "#000000",
          },
        },
      },
    };

    const histChart = new Chart(histChartRef.current, {
      type: "bar",
      data: histChartData,
      options: histChartOptions,
    });

    return () => {
      histChart.destroy();
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content>
          <div className="page-content">
            <div className="dashboard-header">
              <h1>Histórico do Nível da Água</h1>
            </div>
            <div className="site-layout-background">
              <div className="chart-container">
                <div className="chart-wrapper" style={{ width: "80%", height: "450px", marginBottom: "40px" }}>
                  <canvas ref={histChartRef}></canvas>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Historico;
