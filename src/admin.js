/*
 * @Author: shenxsh
 * @Date: 2019-05-13 11:52:19
 * @LastEditTime: 2019-05-14 10:20:48
 * @LastEditors: Do not edit
 * @Description: 描述
 */
import React from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import "normalize.css";
import "./style/common.less";
import Home from "./pages/home";
class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={3} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header />
          <Row className="content">
            <Home />
          </Row>
          <Footer>111</Footer>
        </Col>
      </Row>
    );
  }
}

export default Admin;
