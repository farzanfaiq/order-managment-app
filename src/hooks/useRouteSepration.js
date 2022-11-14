import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useRouteSepration(access) {
  const navigate = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem("login_role");
    if (access && Array.isArray(access) && !access.includes(role))
      return navigate("*");
  }, []);
}
