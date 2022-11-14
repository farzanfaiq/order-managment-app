import { Layout, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import WebNavigation from "./navigation";

const Home = () => {
  const { Title } = Typography;
  return (
    <>
      {/* <Layout
        style={{
          flexDirection: "row",
        }}
      >
        <Content>Company Logo</Content>
        <Content>
          <WebNavigation />
        </Content>
      </Layout> */}
      <Layout
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title
          level={1}
          style={{
            textAlign: "center",
          }}
          className="my-2"
        >
          Order Management System
        </Title>
      </Layout>
    </>
  );
};

export default Home;
