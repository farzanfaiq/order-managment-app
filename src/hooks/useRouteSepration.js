import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useRouteSepration(access) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem("login_role");
    const pathRole = location.pathname.split("/")[1];
    console.log(
      "LOCATION:::::::::",
      location.pathname,
      pathRole,
      pathRole !== role
    );
    if (
      pathRole !== role ||
      (access && Array.isArray(access) && !access.includes(role))
    )
      return navigate("/404");
  }, []);
}
// function useUserRoutes(access) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   useEffect(() => {
//     const role = localStorage.getItem("login_role");
//     const pathRole = location.pathname.split("/")[1];
//     if (
//       "customer" !== role ||
//       (access && Array.isArray(access) && !access.includes(role))
//     )
//       return navigate("/404");
//   }, []);
// }
export { useRouteSepration };
