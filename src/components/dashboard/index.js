import React, { useContext, useEffect } from "react";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../loginContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const authUser = useContext(LoginContext);
  console.log("auth user.........", authUser);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      console.log("i am here.....");
      navigate("/admin/login");
    }
  }, []);

  const { Title } = Typography;
  return (
    <div>
      <Title
        style={{
          textTransform: "capitalize",
        }}
        level={3}
        className="my-2"
      >
        {localStorage.getItem("login_role")} Dashboard
      </Title>
      <Title level={5} className="my-2">
        Welcome to the Dashboard !
      </Title>
    </div>
  );
};

export default Dashboard;
