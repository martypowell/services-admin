import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { connect } from "react-redux";

const { Header, Content, Footer } = Layout;

const AdminLayout = props => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/categories">Categories</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/keywords">Keywords</Link>
        </Menu.Item>
        <Menu.Item key="4" style={{ float: "right " }}>
          <span>
            {props.userInfo &&
              Object.prototype.hasOwnProperty.call(
                props.userInfo,
                "firstName"
              ) && <span>Hi, {props.userInfo.firstName}</span>}
            Hi, {props.userInfo.firstName}
          </span>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        {props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      MartyPowell ©{new Date().getFullYear}
    </Footer>
  </Layout>
);

const mapStateToProps = state => {
  return {
    userInfo: state
  };
};

export default connect(mapStateToProps)(AdminLayout);
