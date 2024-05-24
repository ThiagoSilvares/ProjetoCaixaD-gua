import React from "react";
import { useLocation} from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { useUser } from "./UserContext";

const { Content } = Layout;

const Home = () => {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>

          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <h1>Hello and welcome to the home</h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
