import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css"; // Importe o arquivo CSS

const { Content } = Layout;

const Configuracoes = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const humidityChartRef = useRef(null);
  const temperatureChartRef = useRef(null);
  const [waterLevel, setWaterLevel] = useState(75); // Estado para armazenar o nível atual da água
  const [chartData, setChartData] = useState({
    humidity: [40, 45, 50, 55, 60],
    temperature: [25, 26, 27, 28, 29]
  });

  useEffect(() => {
    if (!lineChartRef.current || !barChartRef.current || !humidityChartRef.current || !temperatureChartRef.current) return;

    // Dados de exemplo para o gráfico de linha
    const lineChartData = {
      labels: ["01/05/2024", "02/05/2024", "03/05/2024", "04/05/2024", "05/05/2024"],
      datasets: [
        {
          label: "Nível da Água ao Longo do Tempo",
          data: [100, 90, 85, 80, 75],
          fill: false,
          borderColor: "rgb(7, 0, 105)", // Azul claro
          backgroundColor: "rgb(7, 0, 105)", // Azul claro
        },
      ],
    };

    // Opções do gráfico de linha
    const lineChartOptions = {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Nível da Água ao Longo do Tempo",
          font: {
            size: 18,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            color: "#000000", // Preto
          },
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#000000", // Preto
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Data",
            color: "#000000", // Preto
          },
          ticks: {
            color: "#000000", // Preto
          },
        },
        y: {
          title: {
            display: true,
            text: "Nível de Água",
            color: "#000000", // Preto
          },
          beginAtZero: true,
          ticks: {
            color: "#000000", // Preto
          },
        },
      },
    };

    // Dados de exemplo para o gráfico de barras
    const barChartData = {
      labels: ["Manhã", "Tarde", "Noite"],
      datasets: [
        {
          label: "Nível da Água",
          data: [80, 75, 85], // Dados fictícios para diferentes momentos do dia
          backgroundColor: ["rgb(7, 0, 105, 0.7)", "rgb(7, 0, 105, 0.7)", "rgb(7, 0, 105, 0.7)"], // Tons mais claros de azul
          borderColor: ["rgb(7, 0, 105, 0.3)", "rgb(7, 0, 105, 0.3)", "rgb(7, 0, 105, 0.3)"], // Azul claro
          borderWidth: 1,
        },
      ],
    };

    // Opções do gráfico de barras
    const barChartOptions = {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Comparação do Nível da Água entre Diferentes Momentos do Dia",
          font: {
            size: 18,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            color: "#000000", // Preto
          },
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#000000", // Preto
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Momento do Dia",
            color: "#000000", // Preto
          },
          ticks: {
            color: "#000000", // Preto
          },
        },
        y: {
          title: {
            display: true,
            text: "Nível de Água",
            color: "#000000", // Preto
          },
          beginAtZero: true,
          ticks: {
            color: "#000000", // Preto
          },
        },
      },
    };

    const humidityChart = new Chart(humidityChartRef.current, {
      type: "bar",
      data: {
        labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5"],
        datasets: [{
          label: "Umidade por Dia",
          data: chartData.humidity,
          backgroundColor: "rgb(7, 0, 105, 0.7)"
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Dados de Umidade",
            font: {
              size: 18,
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              color: "#000000"
            }
          },
          legend: {
            display: false
          }
        }
      }
    });

    const temperatureChart = new Chart(temperatureChartRef.current, {
      type: "bar",
      data: {
        labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5"],
        datasets: [{
          label: "Temperatura por Dia",
          data: chartData.temperature,
          backgroundColor: "rgb(7, 0, 105, 0.7)"
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Dados de Temperatura",
            font: {
              size: 18,
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              color: "#000000"
            }
          },
          legend: {
            display: false
          }
        }
      }
    });

    // Criação do gráfico de linha
    const lineChart = new Chart(lineChartRef.current, {
      type: "line",
      data: lineChartData,
      options: lineChartOptions,
    });

    // Criação do gráfico de barras
    const barChart = new Chart(barChartRef.current, {
        type: "bar",
        data: barChartData,
        options: barChartOptions,
      });
  
      // Limpeza dos gráficos quando o componente for desmontado
      return () => {
          lineChart.destroy();
          barChart.destroy();
          humidityChart.destroy();
          temperatureChart.destroy();
        };
      }, [chartData]);
    
      return (
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar />
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Content>
              <div className="page-content">
                <div className="dashboard-header">
                  <h1>Dashboard de Monitoramento</h1>
                </div>
                <div className="site-layout-background">
                  <div className="chart-container">
                    <div className="chart-wrapper">
                      <canvas ref={lineChartRef}></canvas>
                      <div className="chart-info">Nível Atual da Água: {waterLevel}%</div>
                    </div>
                    <div className="chart-wrapper">
                      <canvas ref={barChartRef}></canvas>
                    </div>
                    <div className="chart-wrapper">
                      <canvas ref={humidityChartRef}></canvas>
                      <p className="chart-info">Umidade Atual: {chartData.humidity[chartData.humidity.length - 1]}%</p>
                    </div>
                    <div className="chart-wrapper">
                      <canvas ref={temperatureChartRef}></canvas>
                      <p className="chart-info">Temperatura Atual: {chartData.temperature[chartData.temperature.length - 1]}°C</p>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      );
    };
    
    export default Configuracoes;
  