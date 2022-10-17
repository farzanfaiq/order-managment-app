import React from "react";
import { Header, Content } from "antd/lib/layout/layout";
import { Breadcrumb } from "antd";
import { Outlet } from "react-router-dom";

const BodyLayout = () => {
    return (
        <React.Fragment>
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          
         <Outlet />
        </Content>
    </React.Fragment>
    )
}
export default BodyLayout;