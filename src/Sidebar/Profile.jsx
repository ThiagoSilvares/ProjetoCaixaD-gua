import React from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Sidebar from "../Sidebar";
import { useUser } from "../UserContext";


const { Content } = Layout;

const Profile = () => {

  const { userEmail } = useUser();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div style={{ background: "#fff", padding: 24, borderRadius: 8 }}>
              <h1>User Profile</h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size={64} icon={<UserOutlined />} style={{ marginRight: 16 }} />
                <div>
                  <p><strong>Email:</strong> {userEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
