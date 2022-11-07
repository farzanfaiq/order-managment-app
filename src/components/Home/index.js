import { Layout, Typography } from "antd";
import React from "react";

const Home = () => {
  const { Title } = Typography;
  return (
    <>
      <Layout
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title level={1} className="my-2">
          Order Management System
        </Title>
      </Layout>
    </>
  );
};

export default Home;
