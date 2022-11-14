import React, { useContext, useEffect } from "react";
import { Typography, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../loginContext";
import { useRouteSepration } from "../../hooks/useRouteSepration";

const UserDashboard = () => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const authUser = useContext(LoginContext);
  console.log("auth user.........", authUser);
  useRouteSepration(["customer"]);

  useEffect(() => {
    const token = localStorage.getItem("customer_token");
    if (!token) {
      console.log("i am here.....");
      navigate("/customer/login");
    }
  }, []);
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
