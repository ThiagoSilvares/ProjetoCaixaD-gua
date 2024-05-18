import React from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar";

const { Content } = Layout;

const Chart2 = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Grafico aqui
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Chart2;