import React, { Component } from "react";
import MenuConfig from "../../config/menuConfig";
import { Menu } from "antd";
import "./index.less";
const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {item.title}
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <div className="title">React Bike</div>
        </div>
        <Menu mode="vertical" theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
