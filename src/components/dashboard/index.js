import React from "react";
import { Typography } from "antd";

const Dashboard = () => {
  const { Title } = Typography;
  return (
    <div>
      <Title level={3} className="my-2">
        Dashboard
      </Title>
      <Title level={5} className="my-2">
        Welcome to the Dashboard !
      </Title>
    </div>
  );
};

export default Dashboard;
