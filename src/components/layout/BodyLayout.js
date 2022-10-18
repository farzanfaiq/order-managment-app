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

          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
         {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}> */}
            <Outlet />
          {/* </div>  */}
        </Content>
    </React.Fragment>
    )
}
export default BodyLayout;