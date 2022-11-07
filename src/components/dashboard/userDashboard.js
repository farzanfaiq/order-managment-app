import React from "react";
import { Typography, Layout } from "antd";

const UserDashboard = () => {
  const { Title } = Typography;
  return (
    <>
      <Title level={3} className="my-2">
        User Dashboard
      </Title>
      <Title level={5} className="my-2">
        Welcome to the Dashboard !
      </Title>
    </>
  );
};

export default UserDashboard;
