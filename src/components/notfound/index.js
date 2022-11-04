import { Layout, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NothingFound = () => {
  const { Title } = Typography;
  return (
    <Layout
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(234, 234, 234)",
      }}
    >
      <Title
        style={{
          margin: "0",
        }}
        level={1}
      >
        ERROR 404
      </Title>
      <Title
        style={{
          marginTop: "0",
        }}
        level={3}
      >
        The page you are trying to find does not exist
      </Title>
      <Link
        style={{
          padding: "10px",
          background: "rgb(251, 37, 118)",
          color: "#fff",
          textTransform: "uppercase",
        }}
        to="/"
      >
        Go back to Home
      </Link>
    </Layout>
  );
};

export default NothingFound;
