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
  const tensionChartRef = useRef(null);
  const [waterLevel, setWaterLevel] = useState(75);
  const [chartData, setChartData] = useState({
    humidity: [40, 45, 50, 55, 60],
    temperature: [25, 26, 27, 28, 29]
  });

  useEffect(() => {
    if (!lineChartRef.current || !barChartRef.current || !humidityChartRef.current || !temperatureChartRef.current || !tensionChartRef.current) return;

    const lineChartData = {
      labels: ["01/05/2024", "02/05/2024", "03/05/2024", "04/05/2024", "05/05/2024"],
      datasets: [
        {
          label: "Nível da Água ao Longo do Tempo",
          data: [100, 90, 85, 80, 75],
          fill: false,
          borderColor: "rgb(7, 0, 105)",
          backgroundColor: "rgb(7, 0, 105)",
        },
      ],
    };

    const lineChartOptions = {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Nível da Água ao Longo do Tempo",
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
            text: "Data",
            color: "#000000",
          },
          ticks: {
            color: "#000000",
          },
        },
        y: {
          title: {
            display: true,
            text: "Nível de Água",
            color: "#000000",
          },
          beginAtZero: true,
          ticks: {
            color: "#000000",
          },
        },
      },
    };

    const barChartData = {
      labels: ["Manhã", "Tarde", "Noite"],
      datasets: [
        {
          label: "Nível da Água",
          data: [80, 75, 85],
          backgroundColor: ["rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)"],
          borderColor: ["rgb(7, 0, 105)", "rgb(7, 0, 105)", "rgb(7, 0, 105)"],
          borderWidth: 1,
        },
      ],
    };

    const barChartOptions = {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Comparação do Nível da Água entre Diferentes Momentos do Dia",
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
            text: "Momento do Dia",
            color: "#000000",
          },
          ticks: {
            color: "#000000",
          },
        },
        y: {
          title: {
            display: true,
            text: "Nível de Água",
            color: "#000000",
          },
          beginAtZero: true,
          ticks: {
            color: "#000000",
          },
        },
      },
    };

    const tensionChartData = {
      labels: ["01/05/2024", "02/05/2024", "03/05/2024", "04/05/2024", "05/05/2024"],
      datasets: [
        {
          label: "Tensão da Placa ao Longo do Tempo",
          data: [0.129, 1.606, 0.129, 1.606, 0.129],
          fill: false,
          borderColor: "rgb(7, 0, 105)",
          backgroundColor: "rgb(7, 0, 105)",
        },
      ],
    };

    const tensionChartOptions = {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Monitoramento de Tensão da Placa ao Longo do Tempo",
          font: {
            size: 18,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            color: "#ffffff",
          },
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#0",
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Data",
            color: "#0",
          },
          ticks: {
            color: "#0",
          },
        },
        y: {
          title: {
            display: true,
            text: "Tensão da Placa",
            color: "#0",
          },
          beginAtZero: false,
          ticks: {
            color: "#0",
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
          backgroundColor: "rgb(7, 0, 105)"
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
            backgroundColor: "rgb(7, 0, 105)"
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
  
      const tensionChart = new Chart(tensionChartRef.current, {
        type: "line",
        data: tensionChartData,
        options: tensionChartOptions,
      });
  
      const lineChart = new Chart(lineChartRef.current, {
        type: "line",
        data: lineChartData,
        options: lineChartOptions,
      });
  
      const barChart = new Chart(barChartRef.current, {
        type: "bar",
        data: barChartData,
        options: barChartOptions,
      });
  
      // Limpeza dos gráficos quando o componente for desmontado
      return () => {
        humidityChart.destroy();
        temperatureChart.destroy();
        tensionChart.destroy();
        lineChart.destroy();
        barChart.destroy();
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
                    <div className="chart-wrapper" style={{ width: "40%", height: "400px" }}> {/* Ajustado tamanho */}
                      <canvas ref={lineChartRef}></canvas>
                      <div className="chart-info">Nível Atual da Água: {waterLevel}%</div>
                    </div>
                    <div className="chart-wrapper" style={{ width: "40%", height: "400px" }}> {/* Ajustado tamanho */}
                      <canvas ref={barChartRef}></canvas>
                    </div>
                    <div className="chart-wrapper" style={{ width: "40%", height: "400px" }}> {/* Ajustado tamanho */}
                      <canvas ref={humidityChartRef}></canvas>
                      <p className="chart-info">Umidade Atual: {chartData.humidity[chartData.humidity.length - 1]}%</p>
                    </div>
                    <div className="chart-wrapper" style={{ width: "40%", height: "400px" }}> {/* Ajustado tamanho */}
                      <canvas ref={temperatureChartRef}></canvas>
                      <p className="chart-info">Temperatura Atual: {chartData.temperature[chartData.temperature.length - 1]}°C</p>
                    </div>
                    <div className="chart-wrapper" style={{ width: "40%", height: "400px" }}> {/* Ajustado tamanho */}
                      <canvas ref={tensionChartRef}></canvas>
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
  
