import React from "react";
import { Menu } from "antd";

const WebNavigation = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>Navigation One</Menu.Item>
      <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu">
        <Menu.Item key="two">Navigation Two</Menu.Item>
        <Menu.Item key="three">Navigation Three</Menu.Item>
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four">Navigation Four</Menu.Item>
          <Menu.Item key="five">Navigation Five</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
};

export default WebNavigation;
