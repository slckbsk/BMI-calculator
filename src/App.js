import Calculate from "./Pages/Calculate/index.js";
import Sidebar from "./Components/SideBar/index.js";
import AboutBMI from "./Pages/AboutBMI/index.js";
import Records from "./Pages/Record/index.js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/reset.css";
import { Layout, Space } from "antd";
const { Content, Sider } = Layout;

function App() {
  return (
    <div
      style={{
        padding: 40,
      }}
    >
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout
          style={{
            padding: 5,
          }}
        >
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            style={{
              margin: 10,
              padding: 10,
              height: 600,
              border: "1px solid Black",
              borderRadius: "1em",
              justifyContent: "center",
              alignItems: "center",
              background: "white",
            }}
          >
            <Sidebar />
          </Sider>
          <Layout>
            <Content
              style={{
                margin: 10,
                padding: 10,
                textAlign: "justify",
                height: 600,
                border: "1px solid Black",
                borderRadius: "1em",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
              }}
            >
              <Routes>
                <Route path="/" element={<Calculate />} />
                <Route path="/aboutbmi" element={<AboutBMI />} />
                <Route path="/records" element={<Records />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Space>
    </div>
  );
}

export default App;
