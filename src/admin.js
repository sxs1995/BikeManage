import React from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import "./style/common.less";
class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={3}>
          <NavLeft />
        </Col>
        <Col span={21}>
          <Header />
          <Row>content</Row>
          <Footer>111</Footer>
        </Col>
      </Row>
    );
  }
}

export default Admin;
