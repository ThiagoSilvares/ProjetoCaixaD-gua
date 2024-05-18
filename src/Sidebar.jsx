import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LineChartOutlined,
  AreaChartOutlined,
  BarChartOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";



const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <Sider>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">
        <Menu.Item
          key="/home"
          icon={<HomeOutlined />}
          onClick={() => handleNavigation("/home")}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="/profile"
          icon={<UserOutlined />}
          onClick={() => handleNavigation("/profile")}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          key="/chart1"
          icon={<LineChartOutlined />}
          onClick={() => handleNavigation("/chart1")}
        >
          Chart 1
        </Menu.Item>
        <Menu.Item
          key="/chart2"
          icon={<AreaChartOutlined />}
          onClick={() => handleNavigation("/chart2")}
        >
          Chart 2
        </Menu.Item>
        <Menu.Item
          key="/chart3"
          icon={<BarChartOutlined />}
          onClick={() => handleNavigation("/chart3")}
        >
          Chart 3
        </Menu.Item>
          <Menu.Item
            key="/settings"
            icon={<SettingOutlined />}
            onClick={() => handleNavigation("/settings")}
          >
            Configurações
          </Menu.Item>
        
      </Menu>
    </Sider>
  );
};

export default Sidebar;
