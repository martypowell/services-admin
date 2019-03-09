import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

const AdminLayout = props => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">Services</Menu.Item>
        <Menu.Item key="2">Categories</Menu.Item>
        <Menu.Item key="3">Keywords</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        {props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      MartyPowell ©{new Date().getFullYear}
    </Footer>
  </Layout>
);

export default AdminLayout;
